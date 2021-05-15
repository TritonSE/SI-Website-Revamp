import React from "react";
import ResourcesHeader from "../components/ResourcesHeader";
import HeaderImage from "../media/JoinUs_Header.png";
import MobileHeaderImage from "../media/JoinUs_Header_Mobile.svg";

export default function JoinUs() {
    return (
        <div>
            <ResourcesHeader
                image={HeaderImage}
                mobileImage={MobileHeaderImage}
                title="Join Us"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus."
            />
            <p> This is the Join Us Page </p>
        </div>
    );
}
