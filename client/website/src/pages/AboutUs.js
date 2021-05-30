import React from "react";
import PayPal from "../components/PayPal";

export default function AboutUs() {
    return (
        <div>
            <p> This is the About Us Page </p>
            <PayPal
                membershipTitle="Nun/Student/Unemployed"
                membershipID={1}
                membershipCost={16}
                donationAmount={0}
                isNewMember
                affiliatedOrgs="affiliated org 1"
                disable={false}
            />
        </div>
    );
}
