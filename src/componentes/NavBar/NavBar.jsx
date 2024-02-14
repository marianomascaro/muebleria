import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='flex items-center justify-around border border-b-black'>
      <Link to='/'>
        <h1 className='m-1 text-4xl'>Mueblería Los Pinos</h1>
      </Link>
        <nav>
            <ul>
                <li className='m-4 cursor-pointer inline-block'>
                  <NavLink to='/categoria/2' className='bg-green-400 font-semibold py-2 px-3 rounded-lg shadow-xl'>
                    Sillas
                  </NavLink>
                </li>
                <li className='m-4 cursor-pointer inline-block'>
                  <NavLink to='/categoria/3' className='bg-green-400 font-semibold py-2 px-3 rounded-lg shadow-xl' >
                    Mesas
                  </NavLink>
                </li>
                <li className='m-4 cursor-pointer inline-block'>
                  <NavLink to='/categoria/4' className='bg-green-400 font-semibold py-2 px-3 rounded-lg shadow-xl'>
                    Armarios
                  </NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar