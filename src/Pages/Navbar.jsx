import React from 'react'
import logo from '../image/logo.png'
function Navbar() {
  return (
    
    <nav class="bg-white  w-full z-20 top-0 start-0 border-b border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} alt="logo" className=' w-32'/>
        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap"></span> */}
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white bg-[#FC8320]  font-medium rounded-sm text-sm px-5 py-3 text-center hidden lg:block">Schedule Demo</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">

          <li>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="  font-bold rounded-lg md:text-md lg:text-lg px-4  text-center  flex justify-center items-center mx-auto text-black" type="button">Our Products <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
           </button>

{/* <!-- Dropdown menu --> */}
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
          </li>
          <li>
            <a href="#" class="flex justify-center items-center py-2 px-3 ml-1 sm:ml-2 md:ml-3 lg:ml-4 text-black  rounded md:bg-transparent md:hover:text-orange-500 md:p-0 font-bold md:text-md lg:text-lg" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="flex justify-center items-center py-4 px-3 ml-1 sm:ml-2 md:ml-3 lg:ml-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 font-bold md:text-md lg:text-lg">About</a>
          </li>
          <li>
            <a href="#" class="flex justify-center items-center py-2 px-3 ml-1 sm:ml-2 md:ml-3 lg:ml-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 font-bold md:text-md lg:text-lg">Services</a>
          </li>
          <li>
            <a href="#" class="flex justify-center items-center py-2 px-3 ml-1 sm:ml-2 md:ml-3 lg:ml-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 font-bold md:text-md lg:text-lg">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar