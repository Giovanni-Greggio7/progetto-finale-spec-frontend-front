import { useState, useEffect } from 'react'

export default function MainWeapons(){
    
    const [weapons, setWeapons] = useState([])

    function fecthData() {
        fetch('http://localhost:3001/weapons')
            .then(response => response.json()
                .then(data => setWeapons(data))
                .catch(error => console.error(error))
            )
    }

    useEffect(() => {
        fecthData()
    }, [])

    return (
        <>
            <h1>Io sono il componente centrale per gli stratagemmi</h1>
            <ul>
                {weapons.map(element => {
                    return (
                        <li key={element.id}>
                            {element.title}
                            {element.category}
                        </li>
                    )

                })}
            </ul>
        </>

    )
}