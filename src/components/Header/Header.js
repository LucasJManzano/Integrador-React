import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import logo from './assets/logo.png';

function Header({ links }) {

  const history = useHistory();
  const handleSubmit = (e) => {
      e.preventDefault();

      let input = e.target.search.value;
      if (input.length >= 3) {
          history.push(`/search?search=${input}`);
          e.target.search.value = '';
      }
  }
  return (
    <header className="header-area header-sticky" class='header'>
      <div className="container text-center">
        <div className="row justify-content-md-evenly row align-items-center">
          <div className="col-sm-1">
            <Link to="/" className="logo">
              <img
                src={logo}
                alt="logo"
                id='logohead'
              />
            </Link>
          </div>
          <div className="col-md-8">
            <nav className="navbar-collapse">
              <ul className="navbar-nav" id='phead'>
                {
                  links.map((link, i) => <Button text={link} key={link + i} />)
                }
              </ul>
            </nav>
          </div>
          <div className="col-sm-auto">
            <form className="d-flex align-items-center" onSubmit={(param) => handleSubmit(param)}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Buscá tu peli"
                aria-label="Buscar"
                id="search"
              />
            </form>
          </div>
        </div>
      </div>
    </header >
  );
}
export default Header;

