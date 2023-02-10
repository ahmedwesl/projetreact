import React from "react";

function Supplier(props) {

    return (
        <div>
            <p>Nom du fournisseur : {props.name}</p>
            <p>Statut du stock : {props.status ? "Disponible" : "Indisponible"}</p>

        </div>
    );
}

export default Supplier;