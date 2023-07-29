// FranceMap.js
import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const FranceMap = () => {
    const geoUrl =
        "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/FRA.geo.json";

    const clermontFerrandCoords = [3.08333, 45.783329];

    return (
        <div>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    rotate: [-3.5, -46.5, 0],
                    scale: 2500,
                }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#FFF" // Couleur blanche pour la carte
                                stroke="#000" // Couleur noire pour la bordure de la carte
                            />
                        ))
                    }
                </Geographies>

                <Marker coordinates={clermontFerrandCoords}>
                    <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                    >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text
                        textAnchor="middle"
                        y={15}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                        Clermont-Ferrand
                    </text>
                </Marker>
            </ComposableMap>
        </div>
    );
};

export default FranceMap;
