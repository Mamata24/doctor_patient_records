import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />

          {/* <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/employee' component={Employee} /> */}
      </Switch>
      </>
    </Router>
  );
}

export default App;
