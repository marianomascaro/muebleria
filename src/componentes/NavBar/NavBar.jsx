import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header className='flex items-center justify-around border border-b-black'>
        <h1 className='m-1 text-4xl'>Mueblería Los Pinos</h1>
        <nav>
            <ul>
                <li className='m-4 cursor-pointer inline-block'>Sillas</li>
                <li className='m-4 cursor-pointer inline-block'>Mesas</li>
                <li className='m-4 cursor-pointer inline-block'>Armarios</li>
            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar