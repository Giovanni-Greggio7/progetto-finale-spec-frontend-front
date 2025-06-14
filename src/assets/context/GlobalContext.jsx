import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    function debounce(callback, delay) {
        let timer
        return ((value) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback(value)
            }, delay)
        })
    }

    const [stratagems, setStratagems] = useState([])
    const [compareStratagems, setCompareStratagems] = useState([])
    const [favouriteStratagem, setFavouriteStratagem] = useState([])
    const [query, setQuery] = useState('')
    const [inputQuery, setInputQuery] = useState('')
    const [filteredStrat, setFilteredStrat] = useState('')
    const [sortOrder, setSortOrder] = useState(0)

    function fetchDataStratagem() {
        fetch('http://localhost:3001/stratagems')
            .then(response => response.json())
            .then(data => {
                console.log("Dati ricevuti dal server:", data); // Log dei dati ricevuti
                setStratagems(data);
            })
            .catch(error => console.error("Errore nel recupero degli stratagemmi:", error));
    }

    const memorizedMemo = useMemo(() => {

        const filteredData = stratagems
            .filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            )
            .filter(item => (filteredStrat ? item.category === filteredStrat : true));

        filteredData.sort((a, b) => {
            return sortOrder === 1
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
        });

        return filteredData;

    }, [stratagems, query, filteredStrat, sortOrder]);

    const debouncedSetQuery = useCallback(
        debounce(value => setQuery(value), 1000),
        [])

    function handleClick() {
        setSortOrder(prev => prev === 1 ? -1 : 1)
    }

    useEffect(() => {
        debouncedSetQuery(inputQuery);
    }, [inputQuery]);

    const addToCompare = (stratagem) => {
        if (compareStratagems.length < 4 && !compareStratagems.find((item) => item.id === stratagem.id)) {
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
                query,
                setQuery,
                memorizedMemo,
                handleClick,
                sortOrder,
                inputQuery,
                setInputQuery,
                filteredStrat,
                setFilteredStrat,
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