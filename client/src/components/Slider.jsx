import React, { useContext } from 'react'
import { Context } from '../context/context'

const Slider = () => {
  const { slide, setSlide } = useContext(Context);
  return (
    <div className={slide ? 'bg-gray-800/50 h-screen border-r border-zinc-500 w-80 transition-all duration-300' : 'hidden'}>
      <div className='w-full'>
        <div className='w-full flex items-center justify-between px-3 py-3'>
          <div onClick={()=>setSlide(!slide)} className='cursor-pointer'>
            <i className='bx bx-menu text-xl'></i>
          </div>
          <i className='bx bx-search text-xl'></i>
        </div>

        <div className='flex items-center justify-between px-3 py-3 text-xl'>
          <p className='flex items-center gap-2 '><i className='bx bx-edit'></i><span className='text-sm'>New Chat</span></p>
          <p className='w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center'><i className='bx bx-message-detail'></i></p>
        </div>

        <div className='px-3 py-3'>
          <p className='text-md font-semibold tracking-wider mb-4'>Chats</p>
          <div>
            <p className='text-sm text-gray-200'>Your AI Learning Roadmap</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
