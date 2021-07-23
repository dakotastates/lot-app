import axios from 'axios'
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Menu(props) {

  const handleLogoutClick = () =>{
    axios.delete("http://localhost:3001/logout", {withCredentials: true}).then(response =>{
      props.handleLogout()
    }).catch(error=>{
      console.log("logout error", error)
    })

  }

  return(
    <div class="navbar">
      <div class="navbar-container">
        <div class="logo-container"><h1 class="logo">LOT</h1></div>
        <div class="menu-container">
          <ul class="menu-list">
            <li class="menu-list-item active"><Link class="menu-list-item active" to="/" >Home</Link></li>
            <li class="menu-list-item active"><Link class="menu-list-item" to={`/library/${props.user.id}`} >My Library</Link></li>
            <li class="menu-list-item">Find A Library</li>

          </ul>
        </div>

        <div class="profile-container">
            <img class="profile-picture" src="https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png" alt=""/>
            <div class="profile-text-container">
              <button class="dropbtn">
                <span class="profile-text">Profile</span>
                <i class="fas fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <Link to="/account" >My Account</Link>
                <Link onClick={() => handleLogoutClick()} >Logout</Link>
              </div>
            </div>


          <div class="toggle">
            <i class="fas fa-moon toggle-icon"></i>
            <i class="fas fa-sun toggle-icon"></i>
            <div class="toggle-ball"></div>
          </div>
        </div>

      </div>
    </div>


  )

}

export default Menu;

// <Link to={`/library/${props.user.id}`} >My Library</Link>

// <div class="profile-container">
//   <% if user_signed_in? %>
//     <img class="profile-picture" src="https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png" alt=""/>
//     <div class="profile-text-container">
//       <button class="dropbtn">
//         <span class="profile-text">Profile</span>
//         <i class="fas fa-caret-down"></i>
//       </button>
//       <div class="dropdown-content">
//         <Link to="/account" >My Account</Link>
//         <Link to="/account" >Logout</Link>
//       </div>
//     </div>
//   <% else %>
//     <div class="profile-text-container">
//       <%= link_to "login", new_user_session_path, :class => "profile-login-text" %>
//     </div>
//   <% end %>
//
//   <div class="toggle">
//     <i class="fas fa-moon toggle-icon"></i>
//     <i class="fas fa-sun toggle-icon"></i>
//     <div class="toggle-ball"></div>
//   </div>
// </div>

// <div>
//   <Link to={`/library/${props.user.id}`} >My Library</Link>
//   <Link to="/account" >My Account</Link>
// </div>


// TOGGLE

// activate toggle ball for light and dark style
// select the toggle ball
// const ball = document.querySelector(".toggle-ball");
// // select all containers needing to be changed
// const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .dropbtn, .sidebar, .left-menu-icon, .toggle");
//
// // when the toggle ball is clicked
// ball.addEventListener("click",()=>{
//   items.forEach(item=>{
//     item.classList.toggle("active")
//   })
//   // when ball is clicked change ball color when active
//   ball.classList.toggle("active")
// })
