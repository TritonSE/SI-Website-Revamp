/**
 * This file initializes the mailing service used for all emails sent on the website.
 * It also contains a single function that allows for the sending of "automated"
 * emails using the information passed to it in conjunction with the pre-made
 * email-templates. All email formats can be seen seperated by functionality
 * inside the emails folder inside of the backend directory.
 *
 * @summary   Code for initializing mailing system and sending emails.
 * @author    Dhanush Nanjunda Reddy, Amrit Kaur Singh
 */
const nodemailer = require("nodemailer");
const Email = require("email-templates");
const config = require("../../config");

// transporter object for nodemailer
const transporter =
    config.autoEmail.MAIL_USERNAME === ""
        ? null
        : nodemailer.createTransport({
              service: "gmail",
              auth: {
                  type: "OAuth2",
                  user: config.autoEmail.MAIL_USERNAME,
                  pass: config.autoEmail.MAIL_PASSWORD,
                  clientId: config.autoEmail.OAUTH_CLIENT_ID, // Google Cloud Platform
                  clientSecret: config.autoEmail.OAUTH_CLIENT_SECRET, // Google Cloud Platform
                  refreshToken: config.autoEmail.OAUTH_REFRESH_TOKEN, // OAuth Playground
              },
          });

// template based sender object
const mail =
    config.autoEmail.MAIL_USERNAME === ""
        ? null
        : new Email({
              transport: transporter,
              send: true,
              preview: false,
          });

/**
 * Populates given email template with locals and sends it to to_email.
 * All emails are sent from the email account specified in dotenv.
 *
 * @param {string} template - Template email
 * @param {string} to_email - Email address(es) being sent to
 * @param {string} locals - Information that will populate the email template
 * @param {object} res - Response
 * @returns {object} - Mail object / err
 */
async function sendEmail(template, to_email, locals) {
    // sends email only if mail has been successfully setup
    if (mail != null) {
        try {
            await mail.send({
                template,
                message: {
                    from: config.autoEmail.MAIL_USERNAME,
                    to: to_email,
                },
                locals,
            });
        } catch (err) {
            console.error(`Error: Email ${template} could not be sent to ${to_email}. \n${err}`);
            return false;
        }
        // log emails successfully sent

        return true;
    }
    console.error(`Error: Email ${template} could not be sent to ${to_email}. Null mailer.`);
    return false;
    // return res.status(500).send("Server err");
}

module.exports = {
    sendEmail,
};
