import { Link } from "react-router-dom"

export default function Welcome(){
    return(
        <div>
             <h1>Io sono la pagina di benvenuto!</h1>
             <Link to="/homepage"><button>Preparati</button></Link>
        </div>
       
    )
}