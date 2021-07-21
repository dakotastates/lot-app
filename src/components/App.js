import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import Dashboard from './Dashboard'
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    loggedInStatus: "NOT LOGGED IN",
    user: {}
  })

  const handleLogin = (data) =>{
    setState({
      loggedInStatus: "LOGGED IN",
      user: data.user
    })
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (
              <Home  { ...props} handleLogin={handleLogin} loggedInStatus={state.loggedInStatus}/>
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={props => (
              <Dashboard  { ...props} loggedInStatus={state.loggedInStatus}/>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
