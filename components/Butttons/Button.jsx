import React from 'react'

export default function Button({children}) {
  return (
    <>
        <div className='bg-blue-500 text-white font-poppins text-lg lg:text-3xl text-center rounded-xl font-medium p-2 pl-2 md:pl-7 pr-3 md:pr-5 hover:cursor-pointer'>
            <p>{children}</p>
        </div>
    </>
  )
}
