import React, { useContext } from 'react'
import { Context } from '../context/context'
import { jwtDecode } from 'jwt-decode';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { setOpenLogin, user, token, logout } = useContext(Context);

  return (
    <div className='w-full p-3 border-b border-b-zinc-600/50 shadow-[0_0_10px_#2c2c2cbb]'>
      <div className='w-[90vw] lg:w-[70vw] flex items-center justify-between m-auto'>
        <div>
          <h1 className='text-3xl font-semibold cursor-pointer'>Nova Ai</h1>
        </div>

        <div className='flex items-center gap-5'>
          <p className='text-md font-semibold cursor-pointer hover:bg-zinc-300/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:font-bold'>Home</p>
          <p className='text-md font-semibold cursor-pointer hover:bg-zinc-300/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:font-bold'>About Nova</p>
          <p className='text-md font-semibold cursor-pointer hover:bg-zinc-300/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:font-bold'>Subscriptions</p>
          <p className='text-md font-semibold cursor-pointer hover:bg-zinc-300/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:font-bold'>Nova App</p>
        </div>

        <div className='relative h-full flex items-center gap-3'>
          {!token
            ? <>
              <button className='bg-zinc-800 px-5 py-2 hover:bg-zinc-700 rounded-full uppercase text-sm font-semibold tracking-wider' onClick={() => setOpenLogin(true)}>Sign Up</button>
            </>
            : ""
          }

          {token
            ? <div className='w-fit h-fit group'>
              <img className='w-10 h-10 rounded-full cursor-pointer' src={assets.profile_icon} alt='user'></img>
              <div className='hidden group-hover:block absolute top-[110%] right-[15%] w-40 bg-gray-700/90 hover:bg-gray-600/90 p-3 rounded-lg cursor-pointer'>
                <p onClick={logout} className='flex items-center gap-2 text-md'><i className='bx bx-arrow-out-right-square-half text-xl'></i><span>Logout</span></p>
              </div>
            </div>
            : ""
          }

        </div>

      </div>
    </div>
  )
}

export default Navbar
