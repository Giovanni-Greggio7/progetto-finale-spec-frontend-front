import { Link } from "react-router-dom";

export default function MainStratagems({ filteredStratagems }) {

  const categoryClasses = {
    offensivo: "bg-danger text-white",
    difensivo: "bg-success text-white",
    equipaggiamento: "bg-info text-white",
  };
  return (
    <div className="container">
      <div className="row">
        {filteredStratagems.map((element) => {
          const categoryKey = element.category.toLowerCase();
          const categoryClass = categoryClasses[categoryKey] || "bg-light text-dark"

          return (
            <div key={element.id} className="col-md-3 mb-4">
              <div className={`card h-100 shadow-sm border-0 ${categoryClass}`}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h6 className="card-title">{element.title}</h6>
                  <p className="card-subtitle mb-2">{element.category}</p>
                  <div className="mt-3 d-flex justify-content-between">
                    <Link to={`/stratagemmi/${element.id}`}>
                      <button className="btn btn-warning btn-outline-dark btn-sm">Dettagli</button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}