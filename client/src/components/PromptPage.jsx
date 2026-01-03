import React, { useContext } from 'react'
import { Context } from '../context/context'

const PromptPage = () => {
    const { input, setInput, slide, setSlide } = useContext(Context);

    const onChangeHndler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(input => ({ ...input, [name]: value }));
    }

    

    return (
        <div className='relative h-screen w-full flex items-center justify-center'>
            <div onClick={() => setSlide(!slide)} className={slide ? "hidden" : 'absolute top-5 left-5 rounded-full h-10 w-10 hover:bg-gray-500/30 flex items-center justify-center cursor-pointer transition-all duration-500'}>
                <i className='bx bx-menu text-xl'></i>
            </div>
            <div className='w-[70vw] lg:w-[40vw] bg-gray-700/30 rounded-2xl border border-zinc-300'>
                <div className='w-full px-3'>
                    <div>
                        <input type="text" className='text-white placeholder:text-gray-400 h-12 w-full mb-2 rounded-2xl bg-transparent border-none outline-none pl-3 accent-blue-600' placeholder='Ask anything. Type @ for mentions and / for shortcuts.' onChange={onChangeHndler} />
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4 justify-center px-3 text-md mb-4'>

                            <p className='relative group p-1 hover:bg-gray-400/40 w-8 h-8 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300'><i className='bx bx-globe-alt-2'></i><span className='hidden group-hover:block absolute top-[-80%] w-[130px] px-2 text-[12px] text-center bg-black border border-gray-300 p-[2px] rounded-lg'>Set source for search</span></p>

                            <p className='relative group p-1 hover:bg-gray-400/40 w-8 h-8 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300'><i className="bx bx-chip"></i><span className='hidden group-hover:block absolute top-[-80%] w-fit px-2 text-[12px] text-center bg-black border border-gray-300 p-[2px] rounded-lg'>Model</span></p>

                            <p className='relative group p-1 hover:bg-gray-400/40 w-8 h-8 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300'><i className='bx bx-link'></i><span className='hidden group-hover:block absolute top-[-80%] w-[90px] text-[12px] text-center bg-black border border-gray-300 p-[2px] rounded-lg'>Attach files</span></p>

                            <p className='relative group p-1 hover:bg-gray-400/40 w-8 h-8 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300'><i className='bx bx-microphone'></i><span className='hidden group-hover:block absolute top-[-80%] w-fit text-[12px] text-center bg-black border border-gray-300 p-[2px] rounded-lg px-2'>Discription</span></p>

                        </div>
                        <div className='w-fit h-fit'>
                            <button className={!(input === "") ? 'w-9 h-9 bg-blue-500 flex items-center justify-center text-2xl rounded-xl' : "w-9 h-9 flex items-center justify-center cursor-pointer bg-zinc-500/50 rounded-xl text-2xl"}><i className='bx bx-arrow-right-stroke'></i></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PromptPage
