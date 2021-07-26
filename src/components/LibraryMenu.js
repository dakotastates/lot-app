// import axios from 'axios'
import { Link } from "react-router-dom";


function LibraryMenu(props) {

  return(
    <div class="navbar-container">
      <div class="menu-container">
        <ul class="menu-list">
          <li class="menu-list-item active"><Link to={`/library/${props.match.params.id}`}>Home</Link></li>
          <li class="menu-list-item"><Link to={`/library/${props.match.params.id}/about`}>About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default LibraryMenu;
