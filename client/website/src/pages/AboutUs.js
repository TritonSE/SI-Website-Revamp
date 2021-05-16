import React from "react";
import PayPal from "../components/PayPal";

export default function AboutUs() {
    return (
        <div>
            <p> This is the About Us Page </p>
            <PayPal
                membershipTitle="Membership A"
                membershipCost={10}
                donationAmount={0}
                disable={false}
            />
        </div>
    );
}
