import { NavLink } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Dropdown({isOpen, handleToggle}) {
  const { logout } = useLogout()

  return (
    <div 
      className={isOpen ? 'px-2' : 'hidden'}
      onClick={handleToggle}
    >
      <ul className="text-center items-center md:hidden">
        <li className="py-4 shadow-sm"><NavLink to="/login">Login</NavLink></li>
        <li className="py-4 shadow-sm"><NavLink to="/signup">Signup</NavLink></li>
        <li>
          <button className="btn ml-2" onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  )
}
