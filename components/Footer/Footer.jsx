import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='bg-gray-800 text-white font-poppins flex flex-col justify-evenly mt-12 lg:flex-row py-20'>
            <div className=' flex flex-col justify-center items-center gap-5'>
              <div>
                © 2022 Vade Labs Pvt. Ltd.
              </div>
              <div className='flex gap-4 justify-center'>
                <img src="Vector (2).png" alt="none" />
                <img src="Vector (3).png" alt="none" />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <div className='text-gray-500'>
                About us
              </div>
              <div className='text-center w-96'>
              We're a group of enthusiasts who love<br/> helping creatives build software applications.
              </div>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-5'>
              <div className='text-gray-500'>Contact</div>
              <div>
                <div className='flex gap-3 items-center'>
                  <div>
                  <img src="Vector (4).png" alt="none"/>
                  </div>
                  <div>
                    hello@vadelabs.com
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-3'>
                    <div>
                      <img src="Vector (5).png" alt="none" />
                    </div>
                    <div>
                      +91-7829887887
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
