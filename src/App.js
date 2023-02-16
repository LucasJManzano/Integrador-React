
/* Importaciones de react/react-router */
import { Switch, Route } from 'react-router-dom';
import { useState} from "react";

//import { Link } from 'react-router-dom';
//import './App.css';


/* Componentes */
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Detailtv from './pages/Detailtv';
import NotFoundPage from './pages/NotFoundPage';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import TvShow from './pages/TvShow';




function App() {
  const [links] = useState(['Películas', 'TVShow', 'Favoritos']);
  
  return (
    <>
      <Header links = {links} />
      <br></br>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/películas" component={Home} />
        <Route exact path="/tvshow" component={TvShow} />
        <Route exact path="/estrenos" component={Home} />
        <Route path="/favoritos" component={Favorites} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/detailtv/:id" component={Detailtv} />
        <Route path="/search" component={Search} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  )
}


export default App;

