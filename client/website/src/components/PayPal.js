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

// const config = require("../config");

const TAX_RATE = 0.08;

// const BACKEND_URL = config.backend.uri;

// PayPal script is located in public/index.html (contains Client ID)
export default function PayPal(props) {
    const { membershipTitle, membershipCost, donationAmount, disable } = props;
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
                onClick(_data, _actions) {
                    // Validate the membership type
                    // const submission = {
                    // };
                    // // call server to validate cart order
                    // return fetch(`${BACKEND_URL}paypal/validate`, {
                    //     method: "post",
                    //     headers: {
                    //         "content-type": "application/json",
                    //     },
                    //     body: JSON.stringify(submission),
                    // }).then((res) => {
                    //     if (res.ok) {
                    //         return actions.resolve();
                    //     }
                    //     alert(
                    //         "Your order cannot be processed at the moment. Please clear out your cart and retry, or contact us directly for placement."
                    //     );
                    //     return actions.reject();
                    // });
                },
                createOrder: async (_data, actions) => actions.order.create(paypalOrderObject),
                onApprove: async (_data, actions) =>
                    actions.order.capture().then(() => {
                        history.push("/");
                        history.go(0);
                    }),

                // disable screen so automation can go through without user clicking out
                // props.disableScreen();
                // loading cursor to indicate to the user they need to wait
                // document.body.style.cursor = "wait";
                // return actions.order.capture().then((details) => {
                // create the membership through database route
                // create order object
                // const sendDate = new Date(
                //     props.selectedDate.getFullYear(),
                //     props.selectedDate.getMonth(),
                //     props.selectedDate.getDate(),
                //     props.selectedTime.substring(0, 2),
                //     props.selectedTime.substring(3, 5)
                // );
                // const orderObj = {
                //     Customer: {
                //         Name: `${details.payer.name.given_name} ${details.payer.name.surname}`,
                //         Email: details.payer.email_address,
                //         Phone: details.payer.phone.phone_number.national_number,
                //     },
                //     Pickup: sendDate,
                //     PayPal: {
                //         Amount: parseFloat(cookies.cart.total).toFixed(2),
                //         transactionID: details.purchase_units[0].payments.captures[0].id,
                //     },
                //     Order: cookies.cart.items.map((item) => ({
                //         item: item[1],
                //         quantity: parseInt(item[3]),
                //         size: item[4],
                //         accommodations:
                //             item[6] !== undefined
                //                 ? Array.isArray(item[6])
                //                     ? item[6].join(",")
                //                     : item[6]
                //                 : "",
                //         specialInstructions: item[5],
                //     })),
                // };
                // signal email automation by calling the /autoEmails/automate route,
                // this will automatically add the order to the database
                // return fetch(`${BACKEND_URL}autoEmails/automate`, {
                //     method: "POST",
                //     headers: {
                //         "content-type": "application/json",
                //     },
                //     body: JSON.stringify(orderObj),
                // })
                //     .then((res) => {
                //         // restore screen back to normal
                //         document.body.style.cursor = null;
                //         props.enableScreen();
                //         // notify user
                //         if (res.ok) {
                //             alert(
                //                 "Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you."
                //             );
                //         } else {
                //             alert(
                //                 "Transaction completed, but email automation failed. You paid for your meal, and should get a confirmation from PayPal. Please contact us to set up your order."
                //             );
                //         }
                //         // clears the cart cookie after order is placed
                //         const newCart = {
                //             items: [],
                //             subtotal: "00.00",
                //             tax: "00.00",
                //             total: "00.00",
                //         };
                //         setCookie("cart", newCart, { path: "/" });
                //         // refresh window
                //         history.push("/");
                //         history.go(0);
                //     })
                //     .catch(() => {
                //         document.body.style.cursor = null;
                //         alert(
                //             "There was an internal error. Check your email for a recepit from PayPal, and contact us to set up your order."
                //         );
                //     });
                // });
                // },
                onCancel: () => {
                    document.body.style.cursor = null;
                    // props.enableScreen();
                },
                onError: (_err) => {
                    document.body.style.cursor = null;
                    // props.enableScreen();
                    // alert("An unexpected error occurred - your payment did not go through. Please try again later.");
                },
            })
            .render(paypalRef.current);
    }, [membershipTitle, membershipCost, donationAmount]);

    return <div>{!disable && <div ref={paypalRef} />}</div>;
}
