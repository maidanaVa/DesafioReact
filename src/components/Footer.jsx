import React from 'react'
import ListaUl from './ListaUl'
import logo from '../assets/logo1.png'
import { RiFacebookBoxFill,RiInstagramLine,RiYoutubeFill } from "react-icons/ri";


function Footer() {
  return (
    <footer className="footer w-screen h-28 bg-sky-600   hidden md:flex justify-around items-center">
       <img src={logo} alt="logo" className='h-10 w-10 md:w-16 md:h-16 lg:w-20 lg:h-20'/>
        <ListaUl /> 
       <p className='text-white text-[8px] md:text-[10px] lg:text-xs'  onClick={()=>console.log('redirije a page Terminos y Condiciones')}>Terminos y Condiciones</p>
       <div className='flex gap-2 text-white'> 
           <RiFacebookBoxFill className=' md:w-w-5 md:h-4 lg:w-6 lg:h-5 cursor-pointer'  onClick={()=>console.log('redirije a Facebook ServiClub')}/>
           <RiInstagramLine className=' md:w-w-5 md:h-4 lg:w-6 lg:h-5 cursor-pointer'  onClick={()=>console.log('redirije a  Instagram ServiClub')}/>
           <RiYoutubeFill className=' md:w-w-5 md:h-4 lg:w-6 lg:h-5 cursor-pointer'  onClick={()=>console.log('redirije a Youtube ServiClub')}/>
       </div>
      </footer>
  )
}

export default Footer
