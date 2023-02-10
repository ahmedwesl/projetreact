import {MapContainer, Marker, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './Map.css';

import L from 'leaflet';
import React, {useContext} from "react";
import {SupplierContext} from "./SupplierContext";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function SupplierMap() {

    const {suppliers} = useContext(SupplierContext);
    return (
        <h1>Carte des fournisseurs</h1>,
            <div className="Map" id="Map">
                <MapContainer center={[45, 5]} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {suppliers.data.map(supplier => (
                        <Marker position={[supplier.latitude, supplier.longitude]}>
                        </Marker>))}
                </MapContainer>

            </div>
    )
}

export default SupplierMap