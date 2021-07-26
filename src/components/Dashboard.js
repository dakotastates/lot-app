// import axios from 'axios'
import Menu from './Menu'
import Sidebar from './Sidebar'
import Home from './Home'
import Account from './Account'
// import About from './About'
import PrivateRoute from "../helpers/PrivateRoute";
import { Switch } from "react-router-dom";
import Library from './Library';
import '../styles/Dashboard.css';




function Dashboard(props) {

  return(
    <div>
      <Menu handleLogout={props.handleLogout} user={props.user}/>
      <Sidebar />
      <div class="container">
        <div class="content-container">
        <Switch>
          <PrivateRoute loggedInStatus={props.loggedInStatus}  path="/library/:id" component={Library} />
          <PrivateRoute loggedInStatus={props.loggedInStatus}  path="/account" component={Account} />
          <PrivateRoute loggedInStatus={props.loggedInStatus}  path="/" component={Home} />
        </Switch>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

// const handleLogoutClick = () =>{
//   axios.delete("http://localhost:3001/logout", {withCredentials: true}).then(response =>{
//     props.handleLogout()
//   }).catch(error=>{
//     console.log("logout error", error)
//   })
//
// }

// <button onClick={() => handleLogoutClick()}>Logout</button>
