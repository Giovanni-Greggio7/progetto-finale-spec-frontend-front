import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-light py-3 mb-4 border-bottom">
      <div className="container d-flex justify-content-between align-items-center position-relative">

        {/* Sezione sinistra */}
        <nav className="d-flex gap-3 w-25 justify-content-start">
          <Link to="/stratagemmi" className="text-decoration-none text-dark fw-semibold">Stratagemmi</Link>
        </nav>

        {/* Logo centrato */}
        <div className="position-absolute start-50 translate-middle-x">
          <Link to="/homepage" className="text-dark text-decoration-none">
            <h3 className="m-0">LOGO</h3>
          </Link>
        </div>

        {/* Sezione destra */}
        <nav className="d-flex gap-3 w-25 justify-content-end">
          <Link to="/confronta" className="text-decoration-none text-dark fw-semibold">Confronta</Link>
          <Link to="/preferiti" className="text-decoration-none text-dark fw-semibold">Preferiti</Link>
        </nav>

      </div>
    </header>
  )
}