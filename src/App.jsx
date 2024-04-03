
import './App.css'
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Payroll from './Pages/Payroll';
import Features from './Pages/Features';
import Mobiles from './Pages/Mobiles';
import Attendance from './Pages/Attendance';
import Modules from './Pages/Modules';
import Benefits from './Pages/Benefits';

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Payroll/>
     <Features/>
     <Mobiles/>
     <Attendance/>
     {/* <Modules/> */}
     <Benefits/>
    </>
  )
}

export default App
