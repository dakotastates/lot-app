import React, { useState } from 'react'
import Login from './Login'
import Registration from './Registration'


function Auth(props) {
 const [toggle, setToggle] = useState(true);

 const handleSuccessfulAuth = (data) =>{
   props.handleLogin(data);
   // props.history.push("/dashboard");
 }

        return(
          <div>
            {toggle ? (
              <Login {...props} handleSuccessfulAuth={handleSuccessfulAuth} toggle={setToggle} />
            ) : (
              <Registration {...props} handleSuccessfulAuth={handleSuccessfulAuth} toggle={setToggle} />
            )}
          </div>
        )
}

export default Auth
