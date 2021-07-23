import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from './auth/Auth';
import Dashboard from './Dashboard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [state, setState] = useState({
    loggedInStatus: false,
    user: {}
  })

  const checkLoginStatus = () =>{
    axios.get("http://localhost:3001/logged_in", { withCredentials: true}).then(response =>{
      if (response.data.logged_in && state.loggedInStatus === false){
        setState({
          loggedInStatus: true,
          user: response.data.user
        })
      } else if (!response.data.logged_in && state.loggedInStatus === true){
        setState({
          loggedInStatus: false,
          user: {}
        })
      }
      // console.log("logged in?", response);
    }).catch(error =>{
      console.log("logged in error", error)
    })
  }

  useEffect(()=>{
    checkLoginStatus()
  })

  const handleLogin = (data) =>{
    setState({
      loggedInStatus: true,
      user: data.user
    })
  }

  const handleLogout = () =>{

    setState({
      loggedInStatus: false,
      user: {}
    })
    console.log(state)
  }

  return (
    <div className="App">

      <Router>
        {state.loggedInStatus ? (
          <Route
            exact
            path={"/"}
            render={props => (
              <Dashboard  { ...props} handleLogout={handleLogout} loggedInStatus={state.loggedInStatus}/>
            )}
          />
          ) : (
            <Route
              exact
              path={"/"}
              render={props => (
                <Auth  { ...props} handleLogin={handleLogin} loggedInStatus={state.loggedInStatus}/>
              )}
            />
        )}
      </Router>

    </div>
  );
}

export default App;


// <Route
//   render={(routeProps) => <Dashboard {...props} {...routeProps} />}
// />

// <Router>
//   <Switch>
    // <Route
    //   exact
    //   path={"/"}
    //   render={props => (
    //     <Home  { ...props} handleLogout={handleLogout} handleLogin={handleLogin} loggedInStatus={state.loggedInStatus}/>
    //   )}
    // />
//     <Route
//       exact
//       path={"/dashboard"}
//       render={props => (
//         <Dashboard  { ...props} loggedInStatus={state.loggedInStatus}/>
//       )}
//     />
//   </Switch>
// </Router>
