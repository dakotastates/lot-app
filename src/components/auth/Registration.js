
import { useState } from 'react';
import axios from 'axios';

function Registration(props) {

  const [state, setState] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: ""
  })

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {email, password, password_confirmation} = state
    axios.post("http://localhost:3001/registrations", {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    },
    {withCredentials: true}
  ).then(response => {
    if (response.data.status === "created"){
      props.handleSuccessfulAuth(response.data)
    }
    // console.log("registration res", response);
  }).catch(error =>{
    console.log("registration error", error.response.data);

  })
  }

  return(
    <div>
      {state.registrationErrors}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} required/>
        <input type="password" name="password_confirmation" placeholder="Password Confirmation" value={state.password_confirmation} onChange={handleChange} required/>
        <button type="submit">Register</button>
      </form>
      Already have an Account? <button onClick={()=>props.toggle(true)}>Login</button>
    </div>
  )
}

export default Registration;
