import './App.css';
import Admit from './Components/Admit/Admit';
import Header from './Components/Header/Header';
import Discharge from './Components/Discharge/Discharge';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PatientsContainer from './Components/PatientsContainer/PatientsContainer';
import Search from './Components/Search/Search';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/admit">
          <Admit></Admit>
        </Route>
        <Route path="/discharge">
          <Discharge></Discharge>
        </Route>
        <Route path="/allPatients">
          <PatientsContainer></PatientsContainer>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
