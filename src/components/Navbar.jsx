import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
const {cart} =useSelector((state)=> state)
  return (
    <div >
      <nav className=' flex  justify-between items-center h-20  max-w-6xl mx-auto '>
       <NavLink to ="/">
       <div className='ml-5'>
       <img className= " h-14" src ="../logo.png"/>
       </div>
       </NavLink>
        <div className='flex items-center gap-5 text-slate-100 font-medium mr-5 space-x-6'>
          <NavLink to ="/">
          <p>Home</p>
          </NavLink>
          <NavLink to ="/cart">
          <div className='relative'><FaShoppingCart className='text-2xl'/>
          {
            cart.length > 0 &&
            <span className='absolute animate-bounce justify-center bg-green-500 -top-1 -right-2 rounded-full text-xs w-5 h-5 flex text-white items-center'>{cart.length}</span>
          }</div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
