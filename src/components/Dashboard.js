import axios from 'axios'

function Dashboard(props) {
  const handleLogoutClick = () =>{
    axios.delete("http://localhost:3001/logout", {withCredentials: true}).then(response =>{
      props.handleLogout()
    }).catch(error=>{
      console.log("logout error", error)
    })

  }
  return(
    <div>
    <h1>Dashboard</h1>
    <h1>Status: {(props.loggedInStatus) ? "Logged In"  : "Not Logged In"}</h1>
    <button onClick={() => handleLogoutClick()}>Logout</button>
    </div>
  )
}

export default Dashboard;
