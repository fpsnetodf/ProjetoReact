import { useState } from 'react'
import  HelloWord  from './../components/HelloWord'
import Botao from '../components/Botao'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Aside from "../components/Aside"
import Main from "../components/Main"




function App() { 
  
  const url = 'https://via.placeholder.com/150'
  return (
    <>
      <div className="">
        <NavBar /> 
          <div className='flex justify-center'>
            <Main /> 
            <Aside/>
          </div>
         <div className='flex'>
         <div className=" w-1/2 px-2  mt-2"></div>
         <div className="bg-blue-950 w-1/2 h-6 justify-end mt-2">.</div>
         </div>
          <Footer />  
      </div>
    </>
  )
}

export default App
