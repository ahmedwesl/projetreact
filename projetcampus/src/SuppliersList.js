import React, {useContext} from "react";

import Supplier from "./Supplier";
import {SupplierContext} from "./SupplierContext";

/* On importe React et la fonction `useContext` du paquet React pour pouvoir accéder
au contexte `SupplierContext`. */

/* On importe également le composant `Supplier` qui sera utilisé pour afficher les informations
sur chaque fournisseur. */


function SuppliersList() {
      /* On accède au contexte `SupplierContext` en utilisant la fonction `useContext`.
    On récupère ensuite la propriété `suppliers` pour avoir accès à la liste des fournisseurs. */
    const {suppliers} = useContext(SupplierContext);

        /* On retourne un composant React qui affiche une en-tête et utilise la propriété `map`
    de l'objet `suppliers.data` pour afficher les informations sur chaque fournisseur. */
    return (
        <div>
            <h1>Liste des fournisseurs</h1>
            {suppliers.data.map(supplier => (
                <Supplier
                    key={supplier.id}
                    name={supplier.name}
                    status={supplier.status}
                />
            ))}
        </div>
    );
}

export default SuppliersList;