import React from 'react'
import ListaUl from './ListaUl'
import logo from '../assets/logo1.png'
import { HiOutlineUserCircle } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import avatar from '../assets/avatar.jpg';
import {TfiClose } from "react-icons/tfi";


function Header({open,setOpen}) {

     const change=()=>{
        setOpen(!open);
     }
   
  return (
    <header className="header w-full h-14 bg-sky-600 flex justify-around items-center ">
       {open=== true ?
          <div  className='flex flex-col justify-start w-1/2 h-full z-10 absolute top-0 left-0  bg-sky-600 pl-6 pt-6 gap-6 '>
            <TfiClose className='w-4 h-4  text-white ' onClick={()=>{change()}}/>
            <ul className='w-[100px] h-auto flex flex-col gap-6  md:gap-6 lg:gap-16 text-[10px]  lg:text-xs '>
                <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Home')}>Home</li>
                <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Desafios')}>Desafios</li>
                <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Requisitos')}>Requisitos</li>
                <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Beneficios')}>Beneficios</li>
                <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Como Funciona')}>¿Como funciona?</li>
                <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Tienda ServiClub')}>Tienda ServiClub</li>
            </ul>
            <img src={logo} alt="logo" className='w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 mt-64'/>
          </div>:
          null
       }
        <SlMenu onClick={()=>{change()}} className=' visible md:hidden mr-16'/>
        <img src={logo} alt="logo" className='w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16  hidden md:flex '/>
       <ListaUl/>  

        <div  className='flex w-32 md:w-32  lg:w-36 lg:h-12 items-center justify-between text-[10px] md:text-xs text-white max-ml-20 md:ml-10'>
        <p>Mis puntos</p>
        <span className='font-semibold'>1.480</span>
        <HiOutlineUserCircle  className='w-6 h-6 hidden md:flex '/>
        <div className='bg-gray-100 w-9 h-9  rounded-full  flex md:hidden justify-center items-center'>
         <img src={avatar} alt="avatar" className=' w-6 h-6 rounded-full  '/>
        </div>
        </div>
      </header>
  )
}

export default Header
