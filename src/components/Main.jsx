import React from 'react'
import FormDataPersonal from './FormDataPersonal'
import avatar from '../assets/avatar.jpg'
import { FiChevronRight } from "react-icons/fi";
import { BiCar,BiShareAlt } from "react-icons/bi";               
import { RiGiftLine } from "react-icons/ri";
import {GoPencil } from "react-icons/go";

function Main() {
  return (
    <main className='main w-screen '>
        <div className="infoUsuario w-screen h-48 bg-marin-blue flex items-center justify-center  gap-5  md:gap-20 lg:gap-28 md:pr-0 lg:pr-32 ">
            <div className='flex flex-col'>
            
                <div className=' w-7 h-7 rounded-full bg-teal-500 hidden relative md:top-28 md:left-20 lg:top-36 lg:left-24 z-10 md:flex items-center justify-center cursor-pointer'><GoPencil className='w-3 h-3 ' onClick={()=>console.log('abre popUp para cambiar de img')}/> </div>
                <div className='bg-gray-100 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full items-center justify-center hidden md:flex '>
                    <img src={avatar} alt="avatar" className=' w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full  '/>
                    
                </div>
            </div>
            <div className='w-[300px] h-[100px] md:w-[340px] lg:w-[400px] lg:h-[80px] flex  justify-center  md:justify-between  mr-0 md:mr-20 gap-1 md:gap-0 mb-4'>
              <div className='text-white' >
                <p className='text-lg font-semibold'>Hola,Rocio</p>
                <p className='text-xs'>Socio desde junio 2022</p>
                <p className='font-medium  text-xs mt-2 flex items-center cursor-pointer' onClick={()=>console.log('redirije a popUp con link de TiendaServiClub para compartir')}>Invitar amigos <BiShareAlt className='ml-1'/></p>
              </div>
              <div className='bg-blue-700 w-[151px] h-20 md:w-52 md:h-20 lg:h-20 rounded-md text-white px-3 pt-2 py-1 lg:pt-2 flex justify-between '>
                 <div className='md:w-4/5  '>
                        <p className='text-xs md:text-sm'>Tenes</p>
                        <p className='text-xs flex'><span className='flex gap-1 items-center'>1.480 </span>puntos</p>
                        <p className='font-semibold text-[11px] md:text-xs mt-0 md:mt-1 lg:mt-1 cursor-pointer'  onClick={()=>console.log('redirije a page PuntosServiCLub')}>¿como canjear mis puntos?</p>
                 </div>
                <RiGiftLine className='w-5 h-5 md:w-7 md:h-7 lg:w-1/5 lg:h-7 mt-2 '/>
              </div>
             
            </div>
            
        </div>
        <div  className='flex justify-center'>
            <div className='divLicense bg-blue-100 w-[280px] h-20 md:w-[343px] lg:w-[400px] md:h-24 rounded-md  flex justify-self-center relative bottom-[45px] md:bottom-[40px] md:left-[50px] lg:left-[25px] font-medium  justify-between py-2 px-3 md:py-4 md:px-6'>
            <div className='flex flex-col  text-[11px] md:text-xs gap-1'>
                <p className=' text-blue-600'>Licencia</p>
                <p >Obtuviste la licencia el 20 de junio</p>
                <p className='text-blue-600 flex items-center cursor-pointer' onClick={()=>console.log('redirije a page Practica')}>Seguir practicando <FiChevronRight className='text-gray-600 w-3 h-3'/></p>
            </div>
            
            <BiCar className=' w-6 h-6 md:w-10 md:h-10 text-blue-600'/>
            </div>
        </div>

        <div className="formData w-full h-auto pb-10 flex flex-col justify-end items-center ">
            <p className='font-medium text-sm md:text-base w-42 mr-40 md:mr-24 lg:mr-[220px] '>Datos Personales</p>
            <FormDataPersonal/>
            <p className='text-[9px] md:text-xs  md:ml-[200px] lg:ml-[85px] text-gray-600 px-5'>Si quieres editar tus datos podés hacerlo desde <span className='text-blue-600 cursor-pointer' onClick={()=>console.log('redirije a page Tienda ServiClub')}>TiendaServiClub</span> o desde la <span className='text-blue-600 cursor-pointer'>App</span>.</p>
        </div>
  </main>
  )
}

export default Main
