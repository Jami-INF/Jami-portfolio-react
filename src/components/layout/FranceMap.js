// FranceMap.js
import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const FranceMap = () => {
    const geoUrl =
        "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/FRA.geo.json";

    const clermontFerrandCoords = [45.783329, 3.08333];

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
                                fill="#DDD"
                                stroke="#FFF"
                            />
                        ))
                    }
                </Geographies>

                <Marker coordinates={clermontFerrandCoords}>
                    <circle r={8} fill="#F00" />
                </Marker>
            </ComposableMap>
        </div>
    );
};

export default FranceMap;
