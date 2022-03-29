import React from 'react'
import Navbar from '../Navbar/Navbar'
import Button from '../Butttons/Button'
import Imagediv from '../Imagediv/Imagediv'
import Playbutton from '../Butttons/Playbutton'
import Inputbutton from '../Butttons/Inputbutton'

export default function Front() {
  return (
    <>
    <div className='sticky top-0 z-10 bg-white'>
        <Navbar/>
    </div>
    <div className='front-bg h-screen flex items-center'>
        <div className='ml-auto flex items-center justify-between'>
            <div className='md:w-1/2 p-4 sm:p-12'>
                <h1 className='font-poppins text-3xl md:text-5xl font-bold md:w-1/2 leading-tight text-center md:text-left '>Integrate APIs In Minutes</h1>
                <p className="font-poppins text-xl md:text-2xl font-semibold mt-4 w-10/12 ">Get ridiculously creative with your products and let us do the hard work for you!</p>
                <div className='flex mt-10 max-w-lg'>
                    <Inputbutton/>
                </div>
            </div>
            <div className='bg-white border-2 pl-7 rounded-l-3xl shadow-xl relative hidden md:block'>
                <img className="border-3" src="Rectangle 361.png" alt="none" />
                <div className='absolute top-12 left-24'>
                    <Imagediv/>
                </div>
                <div className='absolute top-1/2 left-1/2'>
                    <Playbutton/>
                </div>
                <div className='absolute bottom-16 left-1/3 hidden lg:block' >
                    <img src="Screenshot 2022-01-30 at 7.12 1.png" alt="none" />
                </div>
                <div className='absolute left-1/4 bottom-6 font-poppins text-xl font-extrabold'>
                    <p>TAKE A TOUR</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
