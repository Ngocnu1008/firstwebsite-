import './App.css';
import Navigation from './components/general/Nav';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
const Wrap = styled.div``;

function App() {
  return (
    <Router>
      <Navigation/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/Projects" exact>
            <Projects/>
          </Route>
          <Route path="/About" exact>
            <About/>
          </Route>
          <Route path="/Contact" exact>
            <Contact/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
