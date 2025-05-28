import { Link } from "react-router-dom";

export default function MainStratagems({ filteredStratagems }) {
    return (
        <div className="container mt-4">
            <div className="row">
                {filteredStratagems.map(element => (
                    <div key={element.id} className="col-md-3 mb-4 text-center">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <Link
                                    to={`/stratagemmi/${element.id}`}
                                    className="text-decoration-none text-dark flex-grow-1"
                                    
                                >
                                    <h6 className="card-title">{element.title}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">{element.category.toUpperCase()}</h6>
                                    {element.description}
                                </Link>

                                <div className="mt-3 d-flex justify-content-between">
                                    <button className="btn btn-outline-primary btn-sm">
                                        Confronta
                                    </button>
                                    <button className="btn btn-outline-warning btn-sm">
                                        ★ Preferito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}