import React from 'react';
import InputLabel from './InputLabel';
import Select from 'react-select';
import { useState } from "react";


function FormDataPersonal() {

   const[name,setName]=useState('');
   const[lastname,setLastname]=useState('');
   const[dni,setDni]=useState('');
   const[email,setEmail]=useState('');
   const[date,setDate]=useState('');
   const[license,setLicense]=useState('');

   const[leyenda,setLeyenda]=useState('');
   const[error,setError]=useState(false);

  console.log(leyenda);
  console.log(error)


   const changeLicense =(e)=>{
        setLicense(e.value)
    
   } 
   /* console.log(name)
   console.log(lastname)
   console.log(dni)
   console.log(date)
   console.log(email)
   console.log(license) */

  const changeName=(e)=>{
    let valor=e.target.value;
    setName(e.target.value);
    if( valor===''){
        setError(true);
        setLeyenda('El campo no puede estar vacio');
    }else if(/\d/.test(valor) ){
        setError(true);
        setLeyenda('no se puede ingresar numeros');
    
    }else if(valor.length<5){
        setError(true);
        setLeyenda('El campo debe tener entre 5');
    }
    else{
        setError(false);
    }
  }


    const options = [
        { value: 'si', label: 'Si' },
        { value: 'no', label: 'No' }
      ]
      const customStyles = {
        control: base => ({
          ...base,
          borderRadius: "6px",
          borderColor: '#404040',
          fontSize: "12px",
          minHeight: 30,
          height: 36,
          /* width:250, */
    
        })
      }

  return (
    <form className=' md:w-[500px] lg:w-[700px] h-auto  flex justify-center items-center gap-4 ml-0 md:ml-48 mb-4'>
       
      <div className='w-[130px] md:w-[200px] lg:w-[250px] flex flex-col gap-2'>
        <InputLabel labelProp='Nombre' placeholderProp='Rocio' typeProp='text' onChangeProp={changeName} valueProp={name} nameProp='name' leyendaProp={leyenda} errorProp={error} patternProp='/^[a-zA-ZÀ-ÿ\s]{1,40}$/'/>
        <InputLabel labelProp='Fecha de nacimiento' placeholderProp='xx/xx/xxxx' typeProp='date' valueProp={date} onChangeProp={(e)=>{setDate(e.target.value)}}  nameProp='date' patternProp='\d{2}-\d{2}-\d{4}' />
        <InputLabel labelProp='DNI' placeholderProp='32646732' typeProp='text'valueProp={dni} onChangeProp={(e)=>{setDni(e.target.value)}} nameProp='dni' patternProp='/^\d{8,9}$/' />
      </div>
      <div className=' w-[130px] md:w-[200px] lg:w-[250px] flex flex-col gap-2'>
        <InputLabel labelProp='Apellido' placeholderProp='Lopez' typeProp='text' valueProp={lastname} onChangeProp={(e)=>{setLastname(e.target.value)}} nameProp='lastname' patternProp='/^[a-zA-ZÀ-ÿ\s]{1,40}$/' />
        <InputLabel labelProp='Email' placeholderProp='rocio@valtech.com' typeProp='email' valueProp={email} onChangeProp={(e)=>{setEmail(e.target.value)}} nameProp='email' patternProp="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/" />

        <div className='flex flex-col md:w-[200px] lg:w-[250px]  '>
        <label className=' text-[9px] md:text-xs my-1'>¿Tenes licencia de Conducir? <span className='text-red-500'>*</span></label>
        <Select options={options} styles={customStyles} placeholder="Seleccionar" className='md:w-[200px] lg:w-[250px] md:h-[33px] lg:h-9 ' onChange={changeLicense} value={options.filter((obj) => obj.value === license)}/>
        <span className=' invisible text-red-500 text-[8px] md:text-[10px] lg:text-[11px]'>• posible validacion</span>
        </div>
      </div>
      
    </form>
     
  )
}

export default FormDataPersonal
