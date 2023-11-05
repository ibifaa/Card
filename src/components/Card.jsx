import React from 'react'

import bgImage from '/src/assets/background-img 1.jpg'

export const Card= ()=> {
  return (
    <div className='card bg-gray-200  w-[100%]  h-[100vh]  rounded-3xl flex justify-center items-center'>
        <div className='card max-w-lg justify-center items-center p-10 rounded-lg'>
       <div className='gap-2 flex '>
        <div className="logo h-10 w-10 bg-cyan-600 items-center flex justify-center rounded-full text-[#fff]">
                ib
        </div>

        <h4 className='text-[30px] text-[#2f5044]'>Work<span className='text-cyan-600'>station</span></h4>

        </div>
        <div className="card-mg  items-center justify-center" >
        <img className=' flex justify-center items-center h-[250px] w-[80%] mt-5 rounded-xl shadow-xl' src="{bgImage}" alt="image of computer " />
        <h1 className='text-xl mt-5 font-medium'>Freelance Frontend Developer</h1>
        <h2 className='text-cyan-600'>Working from the comfort of home </h2>
        
        <p className='w-[80%] mt-2 text-gray-600'>Passionate Frontend Developer that is creating beautiful and responsive Website using React, JavaScript, CSS, tailwind and HTML</p>
       
       <div>
       <a className='bg-cyan-600 p-2 inline-block uppercase rounded-[5px] w-[120px] tracking-wider shadow-lg text-center mt-5 text-white text-lg'>Hire me</a>
        </div>
        </div>

      


    </div>
    </div>
  )
}
