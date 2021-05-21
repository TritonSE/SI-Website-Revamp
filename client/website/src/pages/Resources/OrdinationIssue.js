import React from "react";
import "../../css/OrdinationIssue.css";

import HeaderImage from "../../media/JoinUs_Header.png";

import OrdinationImage from "../../media/OrdinationIssue_Image.png";

export default function OrdinationIssue() {
    return (
        <div>
            <div className="header-div">
                <img src={HeaderImage} alt="Header Image" id="Header" />
                <div className="header-info-div">
                    <h1 className="header-text">The Ordination Issue</h1>
                </div>
            </div>
            <div className="page-content">
                <p className="ordination-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <img src={OrdinationImage} alt="Ordination Image" className="ordination-image"/>
                <p className="ordination-text bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
}
