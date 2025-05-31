import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <div className="bg-dark text-white d-flex align-items-center justify-content-center min-vh-100 text-center px-3">
            <div className="container">
                <img
                    src="/imgs/Helldivers-2-Logo.png"
                    alt="Helldivers Logo"
                    className="img-fluid mb-4"
                    style={{ maxWidth: '150px' }}
                />
                <div className="container d-flex justify-content-center">
                    <div
                        className="ratio ratio-16x9 rounded overflow-hidden shadow"
                        style={{ maxWidth: '600px' }}
                    >
                        <iframe
                            src="https://www.youtube.com/embed/GH6JinN7A7g?si=icgu2-4WukOj9mwg"
                            title="YouTube video"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className="border-0"
                        ></iframe>
                    </div>
                </div>
                <h2 className="display-4 fw-bold mt-2 mb-1">HELLDIVER!</h2>
                <h6 className="fs-4">
                    È il momento di agire.
                    <br /><br />
                    Gli Illuminati avanzano, decisi a cancellare la libertà e il nostro modo di vivere.
                    <br /><br />
                    Prepara i tuoi <strong>STRATAGEMMI migliori</strong>, affila il tuo arsenale e raduna la tua squadra.
                    Ogni drop conta, ogni proiettile un nemico da eliminare. Non c’è spazio per errori: l’umanità si affida a te.
                    <br /><br />
                    <strong>Per la democrazia! Per la SUPER TERRA!</strong>
                </h6>
                <Link to="/homepage">
                    <button className="btn btn-warning fw-bold px-4 py-2 mb-5">
                        !!! PREPARATI !!!
                    </button>
                </Link>
            </div>
        </div >
    );
}