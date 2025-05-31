import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [stratagems, setStratagems] = useState([])
    const [compareStratagems, setCompareStratagems] = useState([])
    const [favouriteStratagem, setFavouriteStratagem] = useState([])

    function fetchDataStratagem() {
        fetch('http://localhost:3001/stratagems')
            .then(response => response.json())
            .then(data => {
                console.log("Dati ricevuti dal server:", data); // Log dei dati ricevuti
                setStratagems(data);
            })
            .catch(error => console.error("Errore nel recupero degli stratagemmi:", error));
    }

    useEffect(() => {
        fetchDataStratagem();
    }, []);

    const addToCompare = (stratagem) => {
        if (compareStratagems.length < 2 && !compareStratagems.find((item) => item.id === stratagem.id)) {
            setCompareStratagems([...compareStratagems, stratagem]);
        }
    }

    const addToFavourite = (stratagem) => {
        if (!favouriteStratagem.find((item) => item.id === stratagem.id)) {
            setFavouriteStratagem([...favouriteStratagem, stratagem])
        }
    }

    const clearFavourite = (stratagem = null) => {
        if (stratagem) {
            setFavouriteStratagem(favouriteStratagem.filter((item) => item.id !== stratagem.id));
        }
    }

    const clearCompare = (stratagem = null) => {
        if (stratagem) {
            setCompareStratagems(compareStratagems.filter((item) => item.id !== stratagem.id));
        } else {
            setCompareStratagems([]);
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                stratagems,
                setStratagems,
                compareStratagems,
                favouriteStratagem,
                addToCompare,
                addToFavourite,
                clearCompare,
                clearFavourite,
                fetchDataStratagem,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext }