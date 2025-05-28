import { createContext, useContext, useState, useEffect } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [armors, setArmors] = useState([])
    const [stratagems, setStratagems] = useState([])
    const [weapons, setWeapons] = useState([])

    function fetchDataArmor() {
        fetch('http://localhost:3001/armors')
            .then(response => response.json()
                .then(data => setArmors(data))
                .catch(error => console.error(error))
            )
    }

    function fetchDataStratagem() {
        fetch('http://localhost:3001/stratagems')
            .then(response => response.json()
                .then(data => setStratagems(data))
                .catch(error => console.error(error))
            )
    }

    function fetchDataWeapon() {
        fetch('http://localhost:3001/weapons')
            .then(response => response.json()
                .then(data => setWeapons(data))
                .catch(error => console.error(error))
            )
    }

    useEffect(() => {
        fetchDataArmor()
        fetchDataStratagem()
        fetchDataWeapon()
    }, [])

    console.log(armors)

    const value = {
        armors,
        weapons,
        stratagems,
        fetchDataArmor,
        fetchDataWeapon,
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