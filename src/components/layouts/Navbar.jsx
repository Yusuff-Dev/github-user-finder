import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar shadow-lg bg-neutral text-neutral-content'>
      <div className="container mx-auto text-white">
        <div className="flex-none px-2 mx-2"><FaGithub className='inline mr-2 text-3xl'/>
        <Link to='/' className='text-lg font-bold'>Github Finder</Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar