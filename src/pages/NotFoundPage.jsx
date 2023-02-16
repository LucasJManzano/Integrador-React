import { Link } from "react-router-dom"
import "./assets/css/notFound.css";


export default function NotFoundPage() {
    return (
        <div id="notFound">
            <div class="error_container">
                <div class="error_block">
                    <h1>404</h1>
                    <h3>Oops... No encontramos la página!</h3> <br />
                    <p>- Volvamos al lugar que comenzó todo, apretá este botón -</p>
                    <br />
                    <Link to = "/" class="btn1 btn-light"  role="button">Home</Link>
                </div>
            </div>
        </div>)
}
