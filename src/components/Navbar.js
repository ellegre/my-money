import { useLogout } from '../hooks/useLogout'
import Menu from '../assets/menu.svg'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar({handleToggle}) {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className="w-full py-4">
      <div className="container flex justify-between uppercase tracking-wider items-center">
        <Link to="/" className="font-inter text-xl">My money</Link>
        <ul className="flex items-center text-xs">
          {!user && (
            <>
              <li className="md:block hidden mr-2"><NavLink to="/login">Login</NavLink></li>
              <li className="md:block hidden"><NavLink to="/signup">Signup</NavLink></li>
            </>  
          )}
          {user && (
            <>
              <li>hello, {user.displayName}</li>
              <li className="md:block hidden">
                <button className="btn ml-2" onClick={logout}>Logout</button>
              </li>
            </>
          )}    
        </ul>
        <img
          className="w-6 h-6 md:hidden block"
          src={Menu}
          onClick={handleToggle}
        />
      </div>    
    </nav>
  )
}
