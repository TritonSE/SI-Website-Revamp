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

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function InteractiveMap({ setTooltipContent }) {
    const markers = [
        {
            name: "Buenos Aires",
            coordinates: [-58.3816, -34.6037],
            isBranch: true,
            email: "kingnavid@awesome.com",
            urlLink: "https://www.instagram.com/navidisme/?hl=en",
        },
        {
            name: "La Paz",
            coordinates: [-68.1193, -16.4897],
            isBranch: true,
            email: "thomas@cat.com",
            urlLink:
                "https://tse.ucsd.edu/static/3122a8820897b8d1110b0840edc0944e/a41d1/Thomas_Garry.jpg",
        },
        {
            name: "Brasilia",
            coordinates: [-47.8825, -15.7942],
            isBranch: false,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
        // { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
        // { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
        // { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
        // { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
        // { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
        // { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
        // { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
        // { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
        // { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
    ];

    return (
        <div className="Interactive-Map">
            <ComposableMap>
                <ZoomableGroup zoom={1}>
                    <Graticule stroke="#EAEAEC" />
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
                        }
                    </Geographies>
                    {markers.map(({ name, coordinates, isBranch, email, urlLink }) => (
                        <a href={urlLink} target="_blank" rel="noreferrer noopener">
                            <Marker
                                data-tip="hover me"
                                key={name}
                                coordinates={coordinates}
                                onMouseEnter={() => {
                                    setTooltipContent({
                                        country: name,
                                        email: email,
                                        urlLink: urlLink,
                                    });
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent({
                                        country: "",
                                        email: "",
                                        urlLink: "",
                                    });
                                }}
                            >
                                <g
                                    fill="none"
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
                        </a>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}
