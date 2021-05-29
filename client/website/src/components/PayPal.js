/**
 * This file contains the code for the PayPal Smart Buttons integration.
 * It will call the backend to verify the item type, and then after the purchase was complete.
 * The expected props include Membership title, membership cost, donation amount, and disable
 *
 * @summary Renders paypal buttons for payment based on values passed in through props
 * @author PatrickBrown1
 */
import React from "react";
import { useHistory } from "react-router-dom";

const config = require("../config.js");

const BACKEND_URL = config.backend.uri;

const TAX_RATE = 0.08;

// PayPal script is located in public/index.html (contains Client ID)
export default function PayPal(props) {
    const {
        membershipTitle,
        membershipID,
        membershipCost,
        donationAmount,
        isNewMember,
        affiliatedOrgs,
        disable,
    } = props;
    const history = useHistory();

    // only add values to itemTotal and taxTotal if they are positive
    let itemTotal;
    itemTotal = membershipCost > 0 ? membershipCost : itemTotal;
    itemTotal = donationAmount > 0 ? itemTotal + donationAmount : itemTotal;
    const taxTotal = membershipCost > 0 ? membershipCost * TAX_RATE : 0;
    // generate donation and item
    const itemsList = [];
    // add membership item if valid
    if (membershipCost > 0) {
        itemsList.push({
            name: membershipTitle,
            description: `Membership level: ${membershipTitle}`,
            unit_amount: {
                currency_code: "USD",
                value: membershipCost,
            },
            tax: {
                currency_code: "USD",
                value: taxTotal,
            },
            quantity: 1,
        });
    }
    // add donation item if valid
    if (donationAmount > 0) {
        itemsList.push({
            name: "Donation",
            description: `Donation of $${donationAmount}`,
            unit_amount: {
                currency_code: "USD",
                value: donationAmount,
            },
            tax: {
                currency_code: "USD",
                value: 0,
            },
            quantity: 1,
        });
    }
    const paypalRef = React.useRef();
    const paypalOrderObject = {
        intent: "CAPTURE",
        application_context: {
            shipping_preference: "NO_SHIPPING",
        },
        purchase_units: [
            {
                description: "Sakyadhita Membership or Donation Confirmation",
                // Deals with pricing of the cart
                amount: {
                    currency_code: "USD",
                    value: itemTotal + taxTotal,
                    breakdown: {
                        // includes totals for items and taxes. Shipping and handling can be ignored
                        // because the items are for pickup and handling is included in price
                        item_total: {
                            currency_code: "USD",
                            value: itemTotal,
                        },
                        tax_total: {
                            currency_code: "USD",
                            value: taxTotal,
                        },
                    },
                },
                // Deals with the individual item entries for the order
                items: itemsList,
            },
        ],
    };
    // To show PayPal buttons once the component loads
    React.useEffect(() => {
        window.paypal
            .Buttons({
                // onClick is called when the button is clicked, makes server call to validate order first
                onClick(_data, actions) {
                    // Validate the membership type
                    return fetch(
                        `${BACKEND_URL}membershipTypes/${membershipID}?cost=${membershipCost.toFixed(
                            2
                        )}`,
                        {
                            method: "get",
                            headers: {
                                "content-type": "application/json",
                            },
                        }
                    ).then((res) => {
                        // not working? res isn't showing the boolean
                        console.log(res);
                        if (res.ok) {
                            // update
                            return actions.resolve();
                        }
                        return actions.resolve();
                        // alert(
                        //     "There was an issue verifying your membership type, please try again."
                        // );
                        // return actions.reject();
                    });
                },
                createOrder: async (_data, actions) => actions.order.create(paypalOrderObject),
                onApprove: async (_data, actions) => {
                    // disable screen so automation can go through without user clicking out
                    // loading cursor to indicate to the user they need to wait
                    document.body.style.cursor = "wait";
                    return actions.order.capture().then((details) => {
                        // restore screen back to normal
                        document.body.style.cursor = null;

                        // create membership object
                        const membershipObject = {
                            fName: details.payer.name.given_name,
                            lName: details.payer.name.surname,
                            phone: details.payer.phone.phone_number.national_number,
                            email: details.payer.email_address,
                            country: details.payer.address.country_code,
                            isNewMember,
                            affiliatedOrgs,
                            membershipType: membershipID.toString(),
                            totalPaid: parseFloat(details.purchase_units[0].amount.value),
                            payPalTransactionId: details.purchase_units[0].payments.captures[0].id,
                        };
                        return fetch(`${BACKEND_URL}memberships/addUser`, {
                            method: "post",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(membershipObject),
                        })
                            .then((res) => {
                                if (res.ok) {
                                    alert(
                                        "Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you."
                                    );
                                } else {
                                    alert(
                                        "Transaction completed but it wasn't added to our database. Please email us with the receipt sent to your email."
                                    );
                                }
                                history.push("/");
                                history.go(0);
                            })
                            .catch(() => {
                                document.body.style.cursor = null;
                                alert(
                                    "There was an internal error. Check your email for a recepit from PayPal, and contact us to set up your order."
                                );
                            });
                    });
                },
                onCancel: () => {
                    document.body.style.cursor = null;
                    props.enableScreen();
                },
                onError: (_err) => {
                    document.body.style.cursor = null;
                    props.enableScreen();
                    alert(
                        "An unexpected error occurred - your payment did not go through. Please try again later."
                    );
                },
            })
            .render(paypalRef.current);
    }, [membershipTitle, membershipCost, donationAmount]);

    return <div>{!disable && <div ref={paypalRef} />}</div>;
}
