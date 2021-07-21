
import { useState } from 'react';
import axios from 'axios';

function Login(props) {

  const [state, setState] = useState({
    email: "",
    password: "",
    loginErrors: ""
  })

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {email, password} = state
    axios.post("http://localhost:3001/sessions", {
      user: {
        email: email,
        password: password
      }
    },
    {withCredentials: true}
  ).then(response => {
    if (response.data.logged_in){
      props.handleSuccessfulAuth(response.data)
    }
    console.log("login res", response);
  }).catch(error =>{
    console.log("login error", error);
  })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} required/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
