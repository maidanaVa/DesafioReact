import React from 'react'

function ListaUl() {
  return (
    <ul className=' gap-3  md:gap-6 lg:gap-16 md:text-[10px] lg:text-xs hidden md:flex '>
        <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Home')}>Home</li>
        <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Desafios')}>Desafios</li>
        <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Requisitos')}>Requisitos</li>
        <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Beneficios')}>Beneficios</li>
        <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a page Como Funciona')}>¿Como funciona?</li>
        <li className='text-white cursor-pointer' onClick={()=>console.log('redirije a pageTienda ServiClub')}>Tienda ServiClub</li>
    </ul>
  )
}

export default ListaUl
