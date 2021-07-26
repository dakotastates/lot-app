// import axios from 'axios'
// import { Link } from "react-router-dom";
import '../styles/Sidebar.css';

function Sidebar(props) {

  return(
    <div class="sidebar">
      <i class="left-menu-icon fas fa-search"></i>
      <i class="left-menu-icon fas fa-home"></i>
      <i class="left-menu-icon fas fa-users"></i>
      <i class="left-menu-icon fas fa-bookmark"></i>
      <i class="left-menu-icon fas fa-tv"></i>
      <i class="left-menu-icon fas fa-hourglass-start"></i>
      <i class="left-menu-icon fas fa-shopping-cart"></i>
    </div>

  )

}

export default Sidebar;
