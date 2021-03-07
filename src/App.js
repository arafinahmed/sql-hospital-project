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

      </Switch>
    </Router>

  );
}

export default App;
