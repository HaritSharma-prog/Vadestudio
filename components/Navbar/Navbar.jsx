import React from 'react'
import Button from '../Butttons/Button'

export default function Navbar() {
  return (
    <>
    <div className='shadow-md p-2 backdrop-blur'>
          <div className="flex justify-evenly items-center">
          <div className=' top-5'>
            <img src="Rectangle.png" alt="none" />
          </div>

          <div className='w-1/2 flex justify-evenly text-lg font-normal font-poppins items-center'>
            <div className="hidden lg:block">
              <p>Skip the hassle</p>
            </div>
            <div className='hidden lg:block'>
              <p>Cruise through backend</p>
            </div>
          </div>
          <div className='scale-75 lg:scale-100 '>
            <Button>Get Early Access</Button>
          </div>
          </div>
        </div>

    </>
  )
}
