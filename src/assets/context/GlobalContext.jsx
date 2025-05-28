import { createContext, useContext, useState, useEffect } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [stratagems, setStratagems] = useState([])

    function fetchDataStratagem() {
        fetch('http://localhost:3001/stratagems')
            .then(response => response.json()
                .then(data => setStratagems(data))
                .catch(error => console.error(error))
            )
    }

    useEffect(() => {
        fetchDataStratagem()
    }, [])


    const value = {
        stratagems,
        fetchDataStratagem
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalProvider, useGlobalContext }