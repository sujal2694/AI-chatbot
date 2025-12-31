import React, { useContext } from 'react'
import { Context } from '../context/context'
import { jwtDecode } from 'jwt-decode';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { setOpenLogin, user, token } = useContext(Context);

  return (
    <div className='w-full p-6 border-b border-b-zinc-600/50 shadow-[0_0_10px_#2c2c2cbb]'>
      <div className='w-[90vw] lg:w-[70vw] flex items-center justify-between m-auto'>
        <div>
          <h1 className='text-3xl font-semibold cursor-pointer'>Nova Ai</h1>
        </div>

        <div className='flex items-center gap-5'>
          <p className='text-md font-semibold cursor-pointer hover:bg-zinc-300/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:font-bold'>Home</p>
          <p className='text-md font-semibold cursor-pointer hover:bg-zinc-300/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:font-bold'>About</p>
          <p className='text-md font-semibold cursor-pointer hover:bg-zinc-300/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:font-bold'>Our Products</p>
          <p className='text-md font-semibold cursor-pointer hover:bg-zinc-300/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:font-bold'>Pro</p>
        </div>

        <div className='relative h-full flex items-center gap-3'>
          {!user
            ? <>
              <button className='bg-zinc-800 px-5 py-2 hover:bg-zinc-700 rounded-full uppercase text-sm font-semibold tracking-wider' onClick={() => setOpenLogin(true)}>Sign Up</button>
            </>
            : ""
          }

          {!token
            ? <>
              <button className='bg-zinc-800 px-5 py-2 hover:bg-zinc-700 rounded-full uppercase text-sm font-semibold tracking-wider' onClick={() => setOpenLogin(true)}>Sign Up</button>
            </>
            : ""
          }

          {user
            ? <div className=''>
              <img src={user.picture} alt="avatar" className='w-10 h-10 rounded-full profile-entry cursor-pointer' />
            </div>
            : ""
          }

          {token
            ? <img className='w-12 h-12 rounded-full' src={assets.profile_icon} alt='user'></img>
            : ""
          }

          <div className='profile-bar w-[300px] absolute top-[150%] right-[10%] bg-zinc-800 rounded-lg'>
            <div className='flex items-center gap-3 px-3 py-3'>
              <img src={user.picture} alt="" className='w-12 h-12 rounded-full' />
              <div className='flex items-start flex-col text-sm text-gray-400'>
                <h1 className='text-[15px] text-gray-300'>{user.name}</h1>
                <p>{user.email}</p>
              </div>
            </div>

            <hr className='h-[1px] border-none bg-gray-400' />

            <div className='flex items-start flex-col'>
              <div className='w-full flex items-center gap-2 text-gray-300 hover:cursor-pointer hover:bg-gray-100/20 px-4 py-2 rounded-lg'>
                <i className='bx bx-user text-xl'></i>
                <p>Profile</p>
              </div>
              <div className='w-full flex items-center gap-2 text-gray-300 hover:cursor-pointer hover:bg-gray-100/20 px-4 py-2 rounded-lg'>
                <i className='bx  bx-arrow-out-right-square-half text-xl'></i>
                <p>Logout</p>
              </div>
            </div>
          </div>




        </div>

      </div>
    </div>
  )
}

export default Navbar
