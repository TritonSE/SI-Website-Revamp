const express = require("express");
const querystring = require("querystring");
const request = require("request");
const { retrieveEntryByItsPayPalTransactionId, updatePayPalStatus } = require("../db/services/memberships");
const { PAYPAL_STATUS } = require("../db/services/paypal");
const config = require("../config");

const router = express.Router();


/**
 * Helper function that inspects a valid response from PayPal for a specific transaction. Checks transaction to make
 * sure payment is completed (money is guranteed to be received), and amount paid matches with database records.
 * Updates corresponding order's PayPal status in database to either accepted or rejected.
 *
 * @param {*} req - A request containing all transaction information from PayPal for a specific order
 * @param {*} res - Response to send back
 */
async function inspectValidIPNResponse(req, res) {
  // assign posted variables to local variables
  const payment_status = req.body["payment_status"];
  const txn_id = req.body["txn_id"];
  const receiver_email = req.body["receiver_email"];
  const payment_amount = req.body["mc_gross"];

  // only proceed if the checkout transaction has been fully completed, and transaction comes from the right merchant

  if (payment_status != "Completed") {
    return;
  }

  console.log(`Status: ${payment_status} & TID: ${txn_id}`);

  if (receiver_email != config.paypal.PAYPAL_MERCHANT_EMAIL) {
    return;
  }

  // try to find the corresponding order in the database for newly inputted order
  const membershipObj = await retrieveEntryByItsPayPalTransactionId(txn_id);

  if (!membershipObj) return;

  // verify gross amount paid are same
  if (payment_amount != order.PayPal.Amount) {
      updatePayPalStatus(txn_id, PAYPAL_STATUS.REJECTED);
      return;
  }

  // approve order
  await updatePayPalStatus(txn_id, PAYPAL_STATUS.APPROVED);
}

/**
 * Helper function that inspects an invalid response from PayPal for a specific transaction. It checks to see if
 * the transaction exists in the database, changing its status to rejected if it does.
 *
 * @param {*} req - A request containing all transaction information from PayPal for a specific order
 * @param {*} res - Response to send back
 */
async function inspectInvalidIPNResponse(req, res) {
  // try to find the corresponding order in the database
  const txn_id = req.body["txn_id"];

  // IPN invalid, log for manual investigation
  console.error(`IPN Listener: Received INVALID for transaction id ${txn_id}`);
}

/**
 * PayPal IPN listener route implemented, essentially waits for PayPal IPN to notify this route once it receives an
 * order confirmation for payment on their server. It follows the IPN validation process, sending a 200 response back
 * as well a validation step back to PayPal's server to verify that the route was indeed called by PayPal and
 * transaction details can be validated. Once approved, it then confirms validation details and updates the corresponding
 * order's paypal status in the database - approved or rejected. Note, all orders placed into database are set to a default
 * pending paypal status.
 *
 * All orders with approved paypal status ensure that they have received proper payment through PayPal, and are thereby
 * "valid" orders. All orders with prolonged "pending" or "rejected" statuses indicate possibly fraudy orders that
 * were placed in the database by 3rd party intervention, as the PayPal IPN never calls to update their statuses.
 * Hence, the IPN process serves as a security counter-measure for order authentication.
 *
 */
router.post("/ipn-listener", async (req, res, next) => {
  // send 200 response status to indicate the ping has been received (and halt future pings for same transaction)
  res.sendStatus(200);
  res.end();

  // determine URL based off of config file (production vs development)
  let isProduction = config.app.env !== "development";
  isProduction = false;

  console.log("IPN Production: " + isProduction);

  // development utilizes sandbox testing
  const strSimulator = "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr";
  // production utilizes live url
  const strLive = "https://ipnpb.paypal.com/cgi-bin/webscr";
  let paypalURL = strSimulator;

  if (isProduction) paypalURL = strLive;

  // read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
  let payload = "cmd=_notify-validate";

  req.body = JSON.parse(JSON.stringify(req.body));
  for (const key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      const value = querystring.escape(req.body[key]);
      payload = `${payload}&${key}=${value}`;
    }
  }

  var options = {
    method: "post",
    payload,
  };

  // post IPN data back to PayPal to validate
  var options = {
    url: paypalURL,
    method: "POST",
    headers: {
      Connection: "close",
    },
    body: payload,
    strictSSL: true,
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  };

  request(options, (error, response, body) => {
    // error occurred
    if (error) {
      console.error("Could not make handshake request to PayPal");
      return;
    }

    // PayPal responded back
    if (!error && response.statusCode === 200) {
      // successful validation - inspect IPN validation result and act accordingly
      if (body.substring(0, 8) === "VERIFIED") {
        inspectValidIPNResponse(req, res);

        // unsuccessful validation
      } else if (body.substring(0, 7) === "INVALID") {
        inspectInvalidIPNResponse(req, res);
      }
    }
  });
});

module.exports = router;
