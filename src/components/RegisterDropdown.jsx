import React from 'react'

const RegisterDropdown = ({DropDownData,setFormData,setIsDropdown}) => {
  return (
    <div className='w-full border-1 absolute bg-gray-200 top-[102%]'>
        <ul className='flex flex-col p-2 gap-y-1'>
            {
                DropDownData?.map((item) => (
                    <li key={item.id} onClick={()=>{setFormData((prevData) => ({ ...prevData, role: item.role }));setIsDropdown(false)}} className='capitalize cursor-pointer hover:bg-gray-300 py-2 px-2'>{item.role}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default RegisterDropdown