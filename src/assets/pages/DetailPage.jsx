import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function DetailPage() {

    const { id } = useParams()
    const [stratagem, setStratagem] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/stratagems/${id}`)
            .then((response) => response.json())
            .then((data) => setStratagem(data.stratagem))
            .catch((error) => console.error("Errore nel recupero dei dettagli:", error));
    }, [id]);

    if (!stratagem) {
        return <p>Stratagemma non trovato!</p>
    }

    return (
        <div>
            <h3>{stratagem.title}</h3>
            <p>Categoria: {stratagem.category}</p>
            <p>{stratagem.description}</p>
            <p>Cooldown: {stratagem.cooldown}</p>
            <p>Usi: {stratagem.uses}</p>
            <p>Codice di attivazione: {stratagem.activationCode}</p>
            <p>Tempo di dispiegamento: {stratagem.deploymentTime}</p>
            <p>Area di effetto: {stratagem.areaOfEffect}</p>
            <img src={stratagem.image} alt={stratagem.title} />
        </div>
    )
}