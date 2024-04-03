import React from 'react'
import man from '../image/Man.png'

function Features() {
  return (
    <div className='w-full h-[100%] md:h-[39rem] bg-white pt-10 '>
        <div className='features h-20 flex justify-center items-center slideInTop'>
            <p className='text-black font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl pb-8'>
                Our Key Features
            </p>
        </div>
        <div className='flex flex-col md:flex-row '>
            
            <div className='w-[100%] h-[100%] md:w-[50%] md:h-[100%]  bg-white flex justify-center items-center p-5 md:p-2 fadeInTop'>
                    <img src={man} alt="man" className='lg:w-[20rem] md:w-[18rem] sm:w-[16rem] w-[14rem]'/>
            </div>
            <div className='w-[100%] h-[100%] md:w-[50%] md:h-[100%] bg-white flex justify-center  flex-col fadeInTop'>
                <div className='p-5 md:p-7'>
                <p className='text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]'>Time & Attendance 	&nbsp;	&nbsp;	&nbsp;<span className='text-black'>&#8594;</span></p>
                <p className='text-black text-xs sm:text-sm md:text-sm lg:text-md'> Manage leaves ,track time and pay on time</p>
                </div>
                <div className='p-5 md:p-8'>
                <p className='text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]'>Payroll Software 	&nbsp;	&nbsp;	&nbsp;<span className='text-black'>&#8594;</span></p>
                <p className='text-black text-xs sm:text-sm md:text-sm lg:text-md'>Automate and pay employees on time and stay compliant</p>
                </div>
                <div className='p-5 md:p-8'>
                <p className='text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]'>Hiring & Onboarding 	&nbsp;	&nbsp;	&nbsp;<span className='text-black'>&#8594;</span></p>
                <p className='text-black text-xs sm:text-sm md:text-sm lg:text-md'> Create a great candidate experience before and after joining</p>
                </div>
                <div className='p-5 md:p-8'>
                <p className='text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]'>Performance & Culture	&nbsp;	&nbsp;	&nbsp;<span className='text-black'>&#8594;</span></p>
                <p className='text-black text-xs sm:text-sm md:text-sm lg:text-md'> An engaging culture driven by contextual feedback and organization aligned goals.</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Features