import React from 'react'
import Section3 from '../Section3/Section3'


export default function Section2() {
  return (
    <> 
      <div className='nag-shadow rounded-3xl flex flex-col items-center gap-24 -mt-4'>
              <p className='font-poppins font-medium text-center w-2/3 m-auto pt-32 text-2xl -mt-6 leading-9'>
              We understand your needs to <span className="bg-orange-300 pl-1  pr-1"> build integrated applications</span> in today’s hyper-connected world. <span className="bg-orange-300 pl-1  pr-1">Skip the hassle</span> to repeat a cumbersome process <span className="bg-orange-300 pl-1  pr-1">for each unique integration.</span> Join us to build reliable connections with multiple providers and <span className="bg-orange-300 pl-1 pr-1">cruise through backend</span> with ease.
              </p>
              <div>
                <img src="top.png" alt="none" />
              </div>
              <div className='font-poppins font-semibold text-6xl'>
                <h2 className='text-center '><span className='text-blue-700'>Skip</span> the hassle.</h2>
              </div>
              <div className='font-poppins font-semibold text-6xl mb-40'>
                <h2 className='text-center'><span className='text-blue-700'>Cruise</span> through backend.</h2>
              </div>
              
            </div>
    </>
  )
}
