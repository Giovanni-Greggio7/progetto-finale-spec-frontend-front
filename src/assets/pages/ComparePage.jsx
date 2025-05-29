import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function ComparePage() {
    const { compareStratagems, clearCompare } = useGlobalContext();
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/homepage');
    };

    if (compareStratagems.length === 0) {
        return <p className="text-center mt-5 text-danger fw-bold">Nessun stratagemma selezionato per il confronto!</p>;
    }

    return (
        <div className="container">
            <h1 className="text-center text-white">Confronto Stratagemmi</h1>
            <div className="row">
                {compareStratagems.map((stratagem) => (
                    <div key={stratagem.id} className="col-md-6">
                        <div className="card shadow p-4">
                            <img
                                src={`http://localhost:3001/${stratagem.image}`}
                                alt={stratagem.title}
                                className="img-fluid rounded border"
                                style={{
                                    minHeight: '350px',
                                    maxHeight: '800px',
                                    maxWidth: '350px',
                                    objectFit: 'contain',
                                }}
                            />
                            <h2>{stratagem.title}</h2>
                            <p><strong>Categoria:</strong> {stratagem.category}</p>
                            <p><strong>Descrizione:</strong> {stratagem.description}</p>
                            <p><strong>Cooldown:</strong> {stratagem.cooldown}</p>
                            <p><strong>Usi:</strong> {stratagem.uses}</p>
                            <p><strong>Tempo di dispiegamento:</strong> {stratagem.deploymentTime}</p>
                            <p><strong>Area di effetto:</strong> {stratagem.areaOfEffect}</p>
                            <button onClick={() => clearCompare(stratagem)}>Rimuovi</button>
                        </div>
                    </div>
                ))}
            </div>
            {compareStratagems.length === 1 && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={handleBackToHome}>
                        Torna alla Homepage per selezionare un altro stratagemma
                    </button>
                </div>
            )}
            
        </div>
    );
}