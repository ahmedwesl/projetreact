// import Card from "./Card";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import {Marker, Popup} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import './Map.css';


import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function SuppliersMap() {
    return (<MapContainer className={"Map"} center={[38.505, -0.09]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
    );
};
export default SuppliersMap;