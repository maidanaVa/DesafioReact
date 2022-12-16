import React from 'react';


function InputLabel({labelProp,typeProp,placeholderProp,patternProp,valueProp,nameProp,onChangeProp,leyendaProp,errorProp}) {

  return (
    <div className='flex flex-col w-full  '>
      <label className='text-xs my-1'>{labelProp} <span className='text-red-500'>*</span></label>
      <input type={typeProp} placeholder={placeholderProp} value={valueProp} onChange={onChangeProp}  name={nameProp} pattern={patternProp} className='w-[130px] h-[36px] md:w-[200px] lg:w-[250px] md:h-[36px] lg:h-9 border border-gray-700 rounded-md p-2 placeholder:text-xs md:placeholder:text-sm  text-xs md:text-sm' />
      <span className={`${!errorProp ? 'invisible ': 'text-red-500 text-[8px] md:text-[10px] lg:text-[11px]'} h-4 `}> •{leyendaProp}</span> 
      
      
      
    </div>
  )
}

export default InputLabel
