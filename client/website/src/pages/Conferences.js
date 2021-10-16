/**
 * The conferences page on the website. This is a template page
 * and will be served dynamically. It will take in an array of
 * objects containing information for each conference.
 *
 * It simply renders either the mobile version or the
 * desktop version of this page. The data can be fetched on this
 * page and sent to both components and render appropriately
 *
 * @summary     conferences page
 * @author      Amitesh Sharma
 */

import React, { useEffect, useState } from "react";
import Loader from "../components/Main/Loader";
import { fetchConferences } from "../util/requests";
import useWindowSize from "../util/ScreenListener";
import ConferenceDesktop from "../components/Conference/ConferenceDesktop";
import MobileConference from "../components/Conference/MobileConference";
import "../css/Conferences.css";

export default function Conferences() {
    // Needed to determine when to render the desktop or mobile version
    const listener = useWindowSize();

    const [loading, setLoading] = useState(true);
    const [conferencesData, setConferencesData] = useState({});

    useEffect(async () => {
        setLoading(true);
        // fetch the conferences
        const data = await fetchConferences();
        setConferencesData(data);
        setLoading(false);
    }, []);

    /**
     * Determine whether to render desktop or mobile view
     * @returns desktop or mobile rendering
     */
    const isDesktop = () =>
        listener.width > 1050 ? (
            <div>
                <ConferenceDesktop data={conferencesData} />
            </div>
        ) : (
            <div>
                <MobileConference data={conferencesData} />
            </div>
        );

    return loading ? (
        // provide a spinner for when it is loading
        <div className="loading-spinner">
            <Loader />
        </div>
    ) : (
        isDesktop()
    );
}
