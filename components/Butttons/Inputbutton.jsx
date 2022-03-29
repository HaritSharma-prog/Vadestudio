import React,{useDebugValue, useEffect, useState} from "react";
import {VscDebugRestart} from 'react-icons/vsc'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

export default function Inputbutton() {
  const [text, settext] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [mailSent, setMailSent] = useState(false)

  useEffect(()=>{
    if(text==="")
    {
      setIsDisabled(true)
      console.log(text)
    }else setIsDisabled(false)
  }, [text])

  const handleSubmit = (e) => {
    e.preventDefault();
    setMailSent(true);
  }
  const handle_submit=(e)=>{
    e.preventDefault();
    setMailSent(false);
    settext("");

  }

  return (
    <div className="w-full">
      {
        mailSent ? <form action="" className='font-poppins flex flex-col gap-2' onSubmit={handle_submit}>
        <div>
            <button className='w-full bg-blue-600 text-white h-12 rounded-xl'>
                Thank you for your interest!
            </button>
        </div>
        <div className='flex items-start justify-between'>
        <div className='flex gap-1 items-center'>
            <IoMdCheckmarkCircleOutline color="green" />
            <div>
                An email has been sent to your inbox
            </div>
        </div>
        <div className='flex flex-col items-end'>
            <div>Didn't receive?</div>
            <div className='flex items-center gap-1'>
            <button className='text-red-500' type='submit'>
                <div className='flex items-center gap-1'><VscDebugRestart className='rotate-180' color='#ff6600' />
                Resend</div>
                </button>
            </div> 
        </div>
        </div>
    </form> : (
        <form className="h-11 flex w-full" onSubmit={handleSubmit}>
          <input id="inputtext"
            className="border-2 rounded-xl px-1 md:p-2 border-blue-400 flex-grow"
            type="email"
            placeholder="email@example.com" onChange={e => settext(e.target.value)} value={text}/>
          <button className=" bg-blue-600 text-white font-poppins h-full -ml-1 relative right-2 rounded-r-xl px-4 overflow-hidden whitespace-nowrap w-fit" type="submit" disabled={isDisabled}>
            Get Early Access
          </button>
        </form>
        )
      }
    </div>
  );
}
