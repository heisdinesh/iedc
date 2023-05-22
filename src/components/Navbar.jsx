import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import iedc_logo from "../assets/iedc_logo_name.svg"

const Navbar = () => {
    const[open,setOpen] =useState(false)

  let links=[
    {name:"Events",link:'/events'},
    {name:"StartUp School",link:'/startup-school'},
    {name:"Our Team",link:'/our-team'},
    {name:"Contact Us",link:'#contactus'},
  ]
  return (
    <div className="w-full fixed top-0 left -0 shadow-md z-40">
        <div className="md:flex items-center justify-between py-2 bg-white justify-between md:px-10 px-7">
          <div><Link to="/"><img className=" h-14" src={iedc_logo} alt="iedc_logo" /></Link></div>
          <div onClick={()=>{setOpen(!open)}} 
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            {open? <AiOutlineClose />:<AiOutlineMenu/>}
          </div>
          <ul className={`text-md md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 md:w-auto
          w-full bg-white md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
            {
                links.map((link)=>(
                <li key={link.name} className="md:ml-8 md:my-0 my-7 text-md">
                    <Link to={link.link} className="text-gray-800 font-semibold hover:text-greeen duration:500">{link.name}</ Link>
                </li>
                ))
            }
         <div className="flex flex-col md:flex-row gap-6 md:gap-0  font-semibold">
          <button className="bg-graay py-2 px-6 rounded md:ml-8  hover:bg-green-400 duration:500">Forum</button>
          <button className="bg-greeen py-2 px-6 text-white rounded md:ml-8  hover:bg-green-400 duration:500">Pitch your Idea</button>
          </div>
          </ul>
          
        </div>
    </div>
  )
}

export default Navbar