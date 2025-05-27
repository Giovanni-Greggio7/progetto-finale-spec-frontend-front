import { useState, useEffect } from 'react'

export default function MainArmors(){

    const [armors, setArmors] = useState([])

    function fecthData() {
        fetch('http://localhost:3001/armors')
            .then(response => response.json()
                .then(data => setArmors(data))
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
                {armors.map(element => {
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