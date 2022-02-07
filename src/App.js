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
import Homepage from './components/Homepage';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/project-01" component={Homepage} />
        <Route path="/admin/:head/:name" component={Admin} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route component={Errorpg}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;



