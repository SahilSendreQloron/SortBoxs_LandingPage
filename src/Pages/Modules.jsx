import React from 'react';
import mod1 from '../image/1.png';
import mod2 from '../image/2.png';
import mod3 from '../image/3.png';
import mod4 from '../image/4.png';
import mod5 from '../image/5.png';
import mod6 from '../image/6.png';
import mod7 from '../image/7.png';
import mod8 from '../image/8.png';
import mod9 from '../image/9.png';


function Modules() {
  return (
    <div className='w-full h-screen bg-slate-200 flex flex-col'> 
        <div className='h-[10%] flex justify-center items-center'>
          <p className='text-md sm:text-xl md:text-2xl lgtext-3xl font-bold text-[#775FB5]'>
            1 HCM Software, <span className='text-[#FC8320]'>9 HR products,</span> 30+ Modules
          </p>
        </div>
        <div className='h-[90%] w-full grid grid-flow-row-dense grid-cols-12 grid-rows-12 '>
                <div className=' col-span-5 bg-orange-100 row-span-6'>

                </div>

                <div className=' col-span-3 bg-orange-200 row-span-6'>

                </div>

                <div className=' col-span-3 bg-orange-300 row-span-6' >

                </div>
                <div className=' col-span-3 bg-orange-300 row-span-4' >

                </div>
        </div>
    </div>
  );
 
}

export default Modules;
