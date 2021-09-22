import React, { useState } from 'react'

import '../Styles/Login.css'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgEmail, setMsgEmail] = useState('')
  const [msgPassword, setMsgPassword] = useState('')

  const entrar = () => {
    if (email ==='') {
      setMsgEmail('Digite seu email!')
    } else if (password === '') {
      setMsgPassword('Digite sua senha!')
    } else {
      setMsgEmail('')
      setMsgPassword('')
      window.location.href='/Home'
    }

  }

  return (
      <div className='inicial'>
        <div id='login'>
          <div className='container'>
            <div id='login-row' className='row justify-content-center align-items-center'>
              <div id='login-column' className='col-md-6 d-flex justify-content-center'>
                <div id='login-box' className='col-md-12'>
                  <div id='login-form' className='form' action='' method='post'>
                    <h3 className='text-center text-info'>Logar</h3>
                    <div className='form-group'>
                      <label for='username' className='text-info'>Usuário:</label>
                      <input type='text' name='username' id='username' className='form-control' placeholder='Digite seu e-mail' onChange={evt => { setEmail(evt.target.value) }} value={email} />
                      {msgEmail && <div className='alerta'>{msgEmail}</div>}
                    </div>
                    <div className='form-group'>
                      <label for='password' className='text-info'>Senha:</label><br />
                      <input type='password' name='password' id='password' className='form-control' placeholder='Digite sua senha' onChange={evt => { setPassword(evt.target.value) }} value={password} />
                      {msgPassword && <div className='alerta'>{msgPassword}</div>}
                    </div>
                    <div className='text-center'>
                      <button className='mt-2' onClick={() => entrar()}>Entrar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login