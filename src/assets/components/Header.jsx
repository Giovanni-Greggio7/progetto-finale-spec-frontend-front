import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black py-4 mb-4">
      <div className="container d-flex justify-content-between align-items-center position-relative">

        {/* Sezione sinistra */}
        <nav className="d-flex gap-3 w-25 justify-content-start">
          <Link to="/stratagemmi" className="text-decoration-none text-yellow fw-semibold text-center">
            Stratagemmi
          </Link>
        </nav>

        {/* Logo centrato con margine sopra e sotto */}
        <div className="position-absolute top-50 start-50 translate-middle">
          <Link to="/homepage" className="text-warning text-decoration-none" aria-label="Homepage">
            <img
              src="/imgs/Helldivers-2-Logo.png"
              alt="Helldivers Logo"
              className="img-fluid"
              style={{ maxWidth: '150px' }}
            />
          </Link>
        </div>

        {/* Sezione destra */}
        <nav className="d-flex gap-3 w-25 justify-content-end">
          <Link to="/confronta" className="text-decoration-none text-yellow fw-semibold">
            Confronta
          </Link>
          <Link to="/preferiti" className="text-decoration-none text-yellow fw-semibold">
            Preferiti
          </Link>
        </nav>

      </div>
    </header>
  );
}