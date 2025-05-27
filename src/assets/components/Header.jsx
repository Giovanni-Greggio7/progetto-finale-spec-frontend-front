import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-light py-3 mb-4 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Sezione sinistra */}
        <nav className="d-flex gap-3">
          <Link to="/stratagemmi" className="text-decoration-none text-dark fw-semibold">Stratagemmi</Link>
          <Link to="/armature" className="text-decoration-none text-dark fw-semibold">Armature</Link>
          <Link to="/armi" className="text-decoration-none text-dark fw-semibold">Armi</Link>
        </nav>

        {/* Sezione destra */}
        <nav className="d-flex gap-3">
          <Link to="/confronta" className="text-decoration-none text-dark fw-semibold">Confronta</Link>
          <Link to="/preferiti" className="text-decoration-none text-dark fw-semibold">Preferiti</Link>
        </nav>
      </div>
    </header>
  )
}