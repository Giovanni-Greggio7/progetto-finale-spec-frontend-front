import { useState, useEffect } from 'react'

export default function MainStratagems() {

    const [stratagems, setStratagems] = useState([])

    function fecthData() {
        fetch('http://localhost:3001/stratagems')
            .then(response => response.json()
                .then(data => setStratagems(data))
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
                {stratagems.map(element => {
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