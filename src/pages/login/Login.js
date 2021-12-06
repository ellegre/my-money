import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form className="h-screen pb-3 container my-12 mx-auto sm:w-80 text-gray" onSubmit={handleSubmit}>
      <h2 className="section-title md:text-center">Login</h2>
      {error && <p className="mb-3">{error}</p>}
      <label className="mb-4">
        <span>email</span>
        <input 
          type="email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label className="mb-4">
        <span>password</span>
        <input 
          type="password"
          className="input"
          onChange={(e) => setPassword(e.target.value) }
          value={password}
        />
      </label>
      <div className="text-center">
        {!isPending && <button className="btn w-32 mx-auto">
          Login
        </button>}
        {isPending && <button className="btn" disabled>loading</button>}
      </div>           
    </form>
  )
}
