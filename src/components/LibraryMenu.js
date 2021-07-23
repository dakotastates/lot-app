// import axios from 'axios'
import { Link } from "react-router-dom";


function LibraryMenu(props) {

  return(
    <div>
      <Link to={`/library/${props.match.params.id}/home`}>Home</Link>
      <Link to={`/library/${props.match.params.id}/about`}>About</Link>
    </div>
  )
}

export default LibraryMenu;
