import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoidmFuZGVyZmFycmVsIiwiYSI6ImNrcWw3Z3dheTAzZW0ybnRpZDdkZ2szMzQifQ.wrYWKLwTO1lfy3j0uamoiQ';

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lat, setLat] = useState(-7.795934708132447);
    const [lng, setLng] = useState(110.37020928406967);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/vanderfarrel/ckrs2ensk1j4n17pi9iti9ius',
            center: [lng, lat],
            zoom: zoom,
            doubleClickZoom: false
        });

        var marker = new mapboxgl.Marker({
            color: 'red'
        })
            .setLngLat([lng, lat])
            .setPopup(new mapboxgl.Popup().setHTML("Jogja<br>DIY<br>dab!"))
            .addTo(map.current);
    });

    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize

    //     map.current.on('move', () => {
    //         setLng(map.current.getCenter().lng.toFixed(4));
    //         setLat(map.current.getCenter().lat.toFixed(4));
    //         setZoom(map.current.getZoom().toFixed(2));
    //     });
    // });

    return (
        <div>
            {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
