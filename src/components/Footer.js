import { Link } from 'react-router-dom';
import logo from './Header/assets/logo.png';


function Footer() {
    return (
        <footer class='foot'>
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">
                        <Link to="/" className="logo">
                            <img
                                src={logo}
                                alt="logo"
                                id='logofoot'
                            />
                        </Link>
                    </div>
                    <div className="col">
                        <h4 id="pfooter">TuMovies Online</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;