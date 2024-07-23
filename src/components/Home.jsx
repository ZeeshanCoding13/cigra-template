import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <>

        <div className="top-section  w-full text-white">
          <div className=' home flex flex-col justify-between h-screen w-[90%] mx-auto'>

            <div className="navbar flex pt-5 justify-between px-3 items-center w-full">
                <div className="logo">
                    <h1 className='font-bold text-xl'> <b>Cigra</b> Studio template</h1>
                </div>
                <div className="menu font-bold ">
                    <ul className='flex gap-x-7'>
                        <li className='mx-4'><a href="">Aanbond</a></li>
                        <li className='mx-4'><a href="">Over ons</a></li>
                        <li className='mx-4'><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="right flex items-center gap-x-8">
                        <div>
                            <img src="../../public/right.png" alt="" />
                        </div>
                        <div>
                           <img className='' src="../../public/menu.png" alt="" />
                           
                        </div>
                </div>
            </div>
            <div className="flex  flex-col items-center gap-y-3 h-[30vh]">
                <div className='font-bold text-4xl w-3/6 text-center'>Wij brengen uw rijervaring naar een hoger niveau.</div>
                <button className='rounded-lg px-3 py-2 bg-[#3F0066]'>Bekijk aanbod</button>
            </div>
          </div>
        </div>
    </>
)
}

export default Home