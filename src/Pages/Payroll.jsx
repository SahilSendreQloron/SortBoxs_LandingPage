import React from 'react'
import dots1 from  '../image/dots1.png';
import laptop1 from '../image/laptop1.png'
import tab1 from '../image/tab1.png';
import tab2 from '../image/tab2.png';
function Payroll() {
  return (
    <div className='h-[45rem] bg-white w-full flex flex-col '>
        <div>
            <img src={dots1} alt="dots1" />
        </div>
        <div className='flex flex-col justify-center items-center relative '>
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-black p-5 text-center sm:p-2 '><span className='text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#FC8320]'>Modern payroll</span> for all companies</p>
                <p className='p-4 text-center text-xs sm:text-sm md:text-md text-black '>Our industry redefining payroll system automates your payroll and saves time for everyon</p>
        </div>
        <div className='payroll w-full h-[70%] flex justify-center items-center p-5 sm:p-5 bg-cover relative' >
            <img src={laptop1} alt="laptop1" style={{objectFit:'contain'}} className='md:w-[30rem] lg:w-[40rem]' />
            <img src={tab2} alt="tab2" className='md:w-[8rem] lg:w-[10rem] hidden md:block absolute md:left-[10rem] lg:left-[22em] lg:top-44 slideInLeft' />
            <img src={tab1} alt="tab2" className='md:w-[8rem] lg:w-[10rem] hidden md:block absolute md:right-[10rem] lg:right-[22rem] md:top-16 lg:top-0 slideInRight' />
        </div>
    </div>
  )
}

export default Payroll