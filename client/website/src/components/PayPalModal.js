import React from "react";
// import { Button } from 'react-bootstrap';
import PayPal from "./PayPal";
import CustomButton from "./CustomButton";
import "../css/PayPalModal.css";

export default function PayPalModal(props) {
    return (
        <>
            <div className="background" onClick={props.toggleModal} />
            <div className="paypal-modal-wrapper">
                <div className="header-text">Choose Your Payment Method</div>
                <div className="paypal-component">
                    {/* <h className="header-text">Choose Your Payment Method</h> */}
                    <PayPal
                        key={props.key}
                        membershipTitle={props.membershipTitle}
                        membershipID={props.membershipID}
                        membershipCost={props.membershipCost}
                        donationAmount={props.donationAmount}
                        isNewMember={props.isNewMember}
                        affiliatedOrgs={props.affiliatedOrgs}
                        disable={false}
                        transactionCompleted={() => {
                            alert("completed transaction");
                        }}
                    />
                </div>
                <div className="return-button">
                    <CustomButton text="Return to Form" onClickCallback={props.toggleModal} />
                </div>
                {/* <Button style={{ backgroundColor: "#f9ce1d", borderColor: "#f9ce1d", color: "#000000" }} className="return-button" onClick={props.toggleModal}>Return to Form</Button> */}
            </div>
        </>
    );
}
