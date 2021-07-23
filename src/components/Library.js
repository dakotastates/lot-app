// import axios from 'axios'
import LibraryMenu from './LibraryMenu';
import About from './About'
import Home from './Home'
import PrivateRoute from "../helpers/PrivateRoute";
import { Switch } from "react-router-dom";
import '../styles/Library.css';

function Library(props) {
  return(
    <div class="container">
      <div class="content-container">
        <h1>Library</h1>
        <div class="featured-content">
        <img class="featured-title" src="https://lh3.googleusercontent.com/proxy/aBOwLFFzA81sbw9X8_zCHYgP1AHrBiwC_Oa_C2usKNM5aa-VlmzTyulGUrveR7vDEVAJYQvghjA2uo2c5POr9ENK3xlNN61mZ4PXhqwbvtpq0CuAnmUDcX_pg7QNT8LqIQDnvKZfb41k" alt="" />
        </div>

        <div class="library-nav">
          <LibraryMenu {...props}/>
        </div>
      </div>
  <ul>
    <li>sdfsfs</li>
    <li>sdfsfs</li>
    <li>sdfsfs</li>
    <li>sdfsfs</li>
    <li>sdfsfs</li>
    <li>sdfsfs</li>
    <li>sdfsfs</li>
    <li>sdfsfs</li>
    <li>sdfsfs</li>
    
  </ul>
      <Switch>
        <PrivateRoute loggedInStatus={props.loggedInStatus}  path="/library/:id/home" component={Home} />
        <PrivateRoute loggedInStatus={props.loggedInStatus}  path="/library/:id/about" component={About} />
      </Switch>
    </div>
  )
}

export default Library;
