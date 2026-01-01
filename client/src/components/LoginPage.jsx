import React, { useContext } from 'react'
import { Context } from '../context/context'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import toast from 'react-hot-toast';

const LoginPage = () => {
    const { currState, setCurrState, setOpenLogin, openLogin, data, setData, url, setToken } = useContext(Context);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Sign Up") {
            newUrl += "/api/user/registerUser"
            toast.success("Registered successfully")
        } else {
            newUrl += "/api/user/loginUser"
            toast.success("Login successfully")
        }
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
        } else {
            toast.error("Something was wrong!")
        }
        setOpenLogin(!openLogin)
    }

    return (
        <>
            {openLogin
                ? <div className='h-screen w-full absolute top-0 left-0 flex items-center justify-center bg-zinc-800/40'>
                    <div className='w-[40vw] lg:w-[25vw] bg-gray-600/50 rounded-xl p-6'>

                        <div className='w-full flex items-center justify-between mb-4'>
                            <h1 className='text-3xl uppercase font-semibold'>{currState}</h1>
                            <i onClick={() => setOpenLogin(false)} className='bx bx-x text-xl cursor-pointer'></i>
                        </div>

                        <form onSubmit={onLogin}>

                            <div className='w-full flex items-center flex-col gap-2 my-3 mt-8 mb-8'>
                                {currState === "Sign Up"
                                    ? <div className='w-[95%]'>
                                        <p className='text-sm pl-3 mb-1 text-gray-200'>Username</p>
                                        <input className='w-full h-10 bg-transparent border border-gray-500 rounded-lg text-gray-200 pl-3 outline-none focus:border-blue-500 focus:border-2 transition-all duration-100' name='name' value={data.name} onChange={onChangeHandler} placeholder='Type here' type="text" required />
                                    </div>
                                    : ""}


                                <div className='w-[95%]'>
                                    <p className='text-sm pl-3 mb-1 text-gray-200'>Email</p>
                                    <input className='w-full h-10 bg-transparent border border-gray-500 rounded-lg text-gray-200 pl-3 outline-none focus:border-blue-500 focus:border-2 transition-all duration-100' name='email' value={data.email} onChange={onChangeHandler} placeholder='Type here' type="email" required />
                                </div>

                                <div className='w-[95%]'>
                                    <p className='text-sm pl-3 mb-1 text-gray-200'>Password</p>
                                    <input className='w-full h-10 bg-transparent border border-gray-500 rounded-lg text-gray-200 pl-3 outline-none focus:border-blue-500 focus:border-2 transition-all duration-100' name='password' value={data.password} onChange={onChangeHandler} placeholder='Type here' type="password" required />
                                </div>
                            </div>

                            <div className='flex items-center gap-2 pl-4'>
                                <input className='accent-gray-600 border-none' type="checkbox" required />
                                <p className='font-semibold text-sm text-slate-300'>Accept Terms & Conditions.</p>
                            </div>

                            <button type='submit' className='w-full my-5 bg-gradient-to-r from-gray-600 via-slate-600 to-zinc-600 py-2 rounded-lg cursor-pointer'>{currState}</button>
                        </form>

                        {currState === "Sign Up"
                            ? <p className='w-full text-center text-sm '>If you have an account? <span onClick={() => setCurrState("Sign In")} className='underline hover:text-zinc-400 cursor-pointer'>Sign In</span></p>
                            : <p className='w-full text-center text-sm '>If you don't have an account? <span onClick={() => setCurrState("Sign Up")} className='underline hover:text-zinc-400 cursor-pointer'>Sign Up</span></p>}
                    </div>
                </div>
                : ""
            }
        </>


    )
}

export default LoginPage
