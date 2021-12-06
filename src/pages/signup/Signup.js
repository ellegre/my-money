import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { error, isPending, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(displayName, email, password)
  }

  return (
    <form className="h-screen pb-3 container my-12 mx-auto sm:w-80 text-gray" onSubmit={handleSubmit}>
      <h2 className="section-title md:text-center">Signup</h2>
      <label className="mb-4">
        <span>name</span>
        <input 
          type="text"
          className="input"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
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
        {!isPending && <button className="btn w-32">
          Signup
        </button>}
        {isPending && <button className="btn" disabled>Loading</button>}
      </div>  
      {error && <p>{error}</p>}         
    </form>
  )
}
