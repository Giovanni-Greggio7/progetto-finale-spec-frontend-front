import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";


export default function FavouritePage() {
  const { favouriteStratagem, clearFavourite } = useGlobalContext();
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/homepage");
  };

  if (favouriteStratagem.length === 0) {
    return (
      <div className="container text-center mt-5 vh-100">
        <p className="text-warning fw-bold fs-4">
          Non hai stratagemmi preferiti!
        </p>
        <button className="btn btn-outline-light mt-3" onClick={handleBackHome}>
          Torna alla Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5 bg-dark min-vh-100">
      <h1 className="text-center text-warning mb-5">I tuoi stratagemmi preferiti</h1>
      <div className="row g-4">
        {favouriteStratagem.map((stratagem) => (
          <div key={stratagem.id} className="col-md-3">
            <div className="card bg-secondary text-light h-100 shadow-lg d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <img
                  src={`http://localhost:3001/${stratagem.image}`}
                  alt={stratagem.title}
                  className="img-fluid rounded mb-3"
                  style={{
                    minHeight: "350px",
                    maxHeight: "500px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
                <h4 className="card-title text-warning">{stratagem.title}</h4>
                <p className="mb-4"><strong>Categoria:</strong> {stratagem.category}</p>
                <button
                  className="btn btn-danger mt-auto"
                  onClick={() => clearFavourite(stratagem)}
                >
                  Rimuovi dai preferiti
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-primary" onClick={handleBackHome}>
          Torna alla homepage
        </button>
      </div>
    </div>
  );
}