import React from "react";
import axios from 'axios';
import Supplier from "./Supplier";

// Définition du composant React "Card"
function Card() {
  // Déclaration de l'état local "suppliers" en utilisant la fonction "React.useState"
  const [suppliers, setSuppliers] = React.useState([]);

  // URL de l'API
  const baseURL = "http://localhost:8000/api/suppliers";

  // Utilisation de la fonction "React.useEffect" pour effectuer la requête API lorsque le composant est monté
  React.useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        // Mise à jour de l'état local avec les données reçues
        setSuppliers(response.data);
      })
  }, []);

  // Si les données n'ont pas encore été reçues, un message est affiché
  if (!suppliers.data) return <h1>Requête en cours</h1>;

  // Sinon, le composant "Supplier" est rendu pour chaque objet dans les données
  return (
    <div>
      {suppliers.data.map(supplier =>
        <Supplier 
          key={supplier.id} 
          name={supplier.name} 
          status={supplier.status ? "Stock Ok" : "Stock Off"}
          checkedAt={supplier.checkedAt.toLocaleString()}
        />
      )}
    </div>
  );
}

// Export du composant "Card"
export default Card;
