import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 items-center border-b-4 pb-1 pt-1'>
      <img src={logo} className='w-[100px]'/>
      <button className='bg-slate-600 rounded-xl py-1 px-3 text-white'>Logout</button>
    </div >
  )
}

export default Navbar
