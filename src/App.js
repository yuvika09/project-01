import './App.css';
import Nav from './components/NavBar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Admin from './components/Admin';
import Errorpg from './components/Errorpg';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/admin/:head/:name" component={Admin} />
        <Route component={Errorpg}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;



