import React, {createContext} from "react";
import axios from "axios";

const API_URL = 'http://localhost:8000/api/suppliers';

// Création du contexte pour partager les données entre les composants
const SupplierContext = createContext();

// Provider qui va fournir les données à tous les composants enfants
function SupplierProvider({children}) {
    // État pour les données des fournisseurs
    const [suppliers, setSuppliers] = React.useState([]);

    // État pour le chargement des données
    const [loading, setLoading] = React.useState(false);

    // État pour les erreurs potentielles
    const [error, setError] = React.useState(null); // true

    React.useEffect(() => {
        setLoading(true);
        axios.get(API_URL).then((response) => {
            setSuppliers(response.data);
            setLoading(false); // true
        })

            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Une erreur est survenue: {error.message}</div>;
    }

    if (!suppliers.data) return <p>requête en cours</p>;

    return (
        <SupplierContext.Provider value={{suppliers, loading, error}}>
            {children}
        </SupplierContext.Provider>
    );
}

export {SupplierContext, SupplierProvider};