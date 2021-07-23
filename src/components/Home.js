
// import axios from 'axios'

function Home(props) {

  // const handleSuccessfulAuth = (data) =>{
  //   props.handleLogin(data);
  //   // props.history.push("/dashboard");
  // }
  //
  // const handleLogoutClick = () =>{
  //   axios.delete("http://localhost:3001/logout", {withCredentials: true}).then(response =>{
  //     props.handleLogout()
  //   }).catch(error=>{
  //     console.log("logout error", error)
  //   })
  //
  // }

  return(
    <div>
      <h1>Home</h1>

    </div>
  )
}

export default Home;

//
// <h1>Status: {(props.loggedInStatus) ? "Logged In" : "Not Logged In"}</h1>
// {
//   (props.loggedInStatus) ?
//   <div>
//     <button onClick={() => handleLogoutClick()}>Logout</button>
//   </div>
//   :
//   <div>
//     <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
//     <Login handleSuccessfulAuth={handleSuccessfulAuth} />
//   </div>
// }
