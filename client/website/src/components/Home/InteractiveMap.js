/**
 * Displays Interactive World Map, containing custom color-coded markers on certain coordinates with custom information
 * upon hover/click. Display information for the hover and marker is required as a prop, which in turn is expected to conform
 * to a certain JSON schema. All attributes in this JSON schema are required for proper rendering. 
 * 
 * @summary Displays Interactive World Map. 
 * 
 * @author Amrit Kaur Singh
 */

import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
    Graticule,
} from "react-simple-maps";
import "../../css/InteractiveMap.css";

// loads topological map information (continents/countries, general outline) using json request 
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function InteractiveMap({ markers }) {
    

    return (
        <div className="Interactive-Map">
            <ComposableMap>
                {/* Makes map zoomable/pannable, with default zoom set as zoomed out as possible */}
                <ZoomableGroup zoom={1}>
                    {/* Creates checkered stroke pattern around map */}
                    <Graticule stroke="#EAEAEC" />
                     {/* Creates all continents to be displayed */}
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
                        }
                    </Geographies>
                     {/* Creates custom markers for all information passed */}
                    {markers.map(({ name, coordinates, isBranch}, i) => (
                          
                            <Marker
                                data-for='soclose'
                                data-tip={i}
                                data-event='click'
                                key={name}
                                className="marker"
                                // coordinates of marker 
                                coordinates={coordinates}
                            >
                                 {/* Outline/style of custom marker defined here */}
                                <g
                                    fill="none"
                                    className="outer"
                                    stroke={isBranch ? "#d77a3d" : "#6652a0"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="translate(-12, -24)"
                                >
                                    <circle cx="12" cy="10" r="4" fill="white" />
                                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                </g>
                            </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}
