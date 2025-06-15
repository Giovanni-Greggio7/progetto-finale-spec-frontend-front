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

    const [compareStratagems, setCompareStratagems] = useState(() => {
        const savedCompared = localStorage.getItem("compareStratagems");
        return savedCompared ? JSON.parse(savedCompared) : [];
    })

    const [favouriteStratagem, setFavouriteStratagem] = useState(() => {
        const savedFavourites = localStorage.getItem("favouriteStratagem");
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

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

    //USEMEMO PER FILTRO E ORDINE
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
        })

        return filteredData

    }, [stratagems, query, filteredStrat, sortOrder]);

    //INPUT RICERCA RITARDATO DI 1 SECONDO
    const debouncedSetQuery = useCallback(
        debounce(value => setQuery(value), 1000),
        [])

    //PULSANTE ORDINE ALFABETICO
    function handleClick() {
        setSortOrder(prev => prev === 1 ? -1 : 1)
    }

    useEffect(() => {
        debouncedSetQuery(inputQuery);
    }, [inputQuery]);


    //LOGICA COMPARATORE
    const addToCompare = (stratagem) => {
        if (compareStratagems.length < 4 && !compareStratagems.find((item) => item.id === stratagem.id)) {
            setCompareStratagems([...compareStratagems, stratagem]);
            localStorage.setItem('compareStratagems', JSON.stringify(compareStratagems))
        }
    }

    const clearCompare = (stratagem = null) => {
        let updatedCompare
        if (stratagem) {
            updatedCompare = compareStratagems.filter((item) => item.id !== stratagem.id);
        } else {
            updatedCompare = [];
        }
        setCompareStratagems(updatedCompare)
        localStorage.setItem('compareStratagems', JSON.stringify(updatedCompare))
    }

     //LOGICA LISTA PREFERITI
    const addToFavourite = (stratagem) => {
        if (!favouriteStratagem.find((item) => item.id === stratagem.id)) {
            const newFavourites = [...favouriteStratagem, stratagem]
            setFavouriteStratagem(newFavourites)
            localStorage.setItem("favouriteStratagem", JSON.stringify(newFavourites))
        }
    }

    const clearFavourite = (stratagem = null) => {
        let updatedFavourites;
        if (stratagem) {
            updatedFavourites = favouriteStratagem.filter((item) => item.id !== stratagem.id);
        } else {
            updatedFavourites = [];
        }
        setFavouriteStratagem(updatedFavourites);
        localStorage.setItem("favouriteStratagem", JSON.stringify(updatedFavourites));
    };



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