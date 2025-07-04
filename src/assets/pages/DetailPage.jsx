import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

export default function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCompare, addToFavourite } = useGlobalContext();
    const [stratagem, setStratagem] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/stratagems/${id}`)
            .then((response) => response.json())
            .then((data) => setStratagem(data.stratagem))
            .catch((error) => console.error("Errore nel recupero dei dettagli:", error));
    }, [id]);

    if (!stratagem) {
        return <p className="text-center mt-5 text-danger fw-bold">Stratagemma non trovato!</p>;
    }

    const handleCompare = () => {
        addToCompare(stratagem);
        navigate('/confronta');
    }

    const handleFavourite = () => {
        addToFavourite(stratagem);
        navigate('/preferiti');
    }

    return (
        <div className="container my-5 vh-100">
            <div className="card bg-black shadow p-4">
                <div className="row g-4">
                    <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
                        <img
                            src={`http://localhost:3001/${stratagem.image}`}
                            alt={stratagem.title}
                            className="img-fluid rounded"
                            style={{
                                minHeight: '400px',
                                maxHeight: '800px',
                                maxWidth: '500px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                    <div className="col-md-6 text-yellow">
                        <h2 className="mb-3">{stratagem.title}</h2>
                        <h5 className="text mb-3">Categoria: {stratagem.category}</h5>

                        <p><strong>Descrizione:</strong> {stratagem.description}</p>
                        <p><strong>Cooldown:</strong> {stratagem.cooldown} secondi</p>
                        <p><strong>Usi:</strong> {stratagem.uses}</p>
                        <p><strong>Codice di attivazione:</strong> {stratagem.activationCode}</p>
                        <p><strong>Tempo di dispiegamento:</strong> {stratagem.deploymentTime} secondi</p>
                        <p><strong>Area di effetto:</strong> {stratagem.areaOfEffect}</p>

                        <div className="d-flex gap-3 mt-4">
                            <button className="btn btn-primary" onClick={handleCompare}>
                                Confronta
                            </button>
                            <button className="btn btn-warning" onClick={handleFavourite}>★ Preferito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
