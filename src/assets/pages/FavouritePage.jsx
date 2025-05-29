import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function FavouritePage() {
  const { favouriteStratagem, clearFavouriteStratagem } = useGlobalContext();
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/homepage");
  };

  if (favouriteStratagem.length === 0) {
    return <p>Non hai stratagemmi preferiti!</p>;
  }

  return (
    <>
      <h1 className="text-white container">I tuoi stratagemmi</h1>
      <div className="row container mx-auto">
        {favouriteStratagem.map((stratagem) => (
          <div key={stratagem.id} className="col-md-6 my-3">
            <div className="card shadow p-4">
              <img
                src={`http://localhost:3001/${stratagem.image}`}
                alt={stratagem.title}
                className="img-fluid rounded border"
                style={{
                  minHeight: "350px",
                  maxHeight: "800px",
                  maxWidth: "350px",
                  objectFit: "contain",
                }}
              />
              <h2>{stratagem.title}</h2>
              <p>
                <strong>Categoria:</strong> {stratagem.category}
              </p>
              <button
                className="btn btn-danger"
                onClick={() => clearFavouriteStratagem(stratagem)}
              >
                Rimuovi dai preferiti
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container my-4">
        <button className="btn btn-secondary" onClick={handleBackHome}>
          Torna alla homepage
        </button>
      </div>
    </>
  );
}