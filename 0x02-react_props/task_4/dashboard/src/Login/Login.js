import React from 'react'

function Login() {
  return (
    <React.Fragment>
              <p>
      Login to access the full dashboard
      </p>
      <label htmlFor='email'>Email</label>
      <input id="email" type="email"></input>
      <label htmlFor='password'>Password</label>
      <input id="password" type="password"></input>
      <button>ok</button>
    </React.Fragment>
  )
}

export default Login