import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function ComparePage() {
    const { compareStratagems, clearCompare } = useGlobalContext();
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/homepage');
    };

    if (compareStratagems.length === 0) {
        return (
            <div className="container text-center mt-5 vh-100">
                <p className="text-warning fw-bold fs-4">
                    Nessun stratagemma selezionato per il confronto!
                </p>
                <button className="btn btn-outline-light mt-3" onClick={handleBackToHome}>
                    Torna alla Homepage
                </button>
            </div>
        );
    }

    return (
        <div className="container py-5 bg-dark min-vh-100">
            <h1 className="text-center text-warning mb-5">Confronto Stratagemmi</h1>
            <div className="row g-4">
                {compareStratagems.map((stratagem) => (
                    <div key={stratagem.id} className="col-md-3">
                        <div className="card bg-secondary text-light h-100 shadow-lg">
                            <div className="card-body d-flex flex-column">
                                <img
                                    src={`http://localhost:3001/${stratagem.image}`}
                                    alt={stratagem.title}
                                    className="rounded-2 mb-4"
                                    style={{
                                        minHeight: '350px',
                                        maxHeight: '500px',
                                        maxWidth: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                                <h2 className="card-title text-yellow">{stratagem.title}</h2>
                                <p><strong>Categoria:</strong> {stratagem.category}</p>
                                <p><strong>Descrizione:</strong> {stratagem.description}</p>
                                <p><strong>Cooldown:</strong> {stratagem.cooldown} secondi</p>
                                <p><strong>Usi:</strong> {stratagem.uses}</p>
                                <p><strong>Tempo di dispiegamento:</strong> {stratagem.deploymentTime} secondi</p>
                                <p><strong>Area di effetto:</strong> {stratagem.areaOfEffect}</p>
                                <button
                                    className="btn btn-warning mt-auto"
                                    onClick={() => clearCompare(stratagem)}
                                >
                                    Rimuovi
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {compareStratagems.length < 4 && (
                <div className="text-center mt-5">
                    <button className="btn btn-primary" onClick={handleBackToHome}>
                        Torna alla Homepage per selezionare un altro stratagemma
                    </button>
                </div>
            )}
        </div>
    );
}