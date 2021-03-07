import './App.css';
import Admit from './Components/Admit/Admit';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/admit">
          <Admit></Admit>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
