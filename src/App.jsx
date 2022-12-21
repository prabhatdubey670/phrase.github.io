import React from 'react'
import './App.css'
// // import Background from './components/Background'
import Navbar from './components/Navbar'
import bg from "D:/codeputs/phrase-text/vite-project/src/assets/6080339896.jpeg"
import TextState from './components/TextState'
// import TextLang from './components/TextLang'
import Content from './components/Content'
function App() {


  return (
    <>
       <img src={bg} alt="img" className='bg-size-cover w-full h-full' />
    <div className='flex flex-row '>
   
    {/* <Navbar/> */}
   
   <TextState/>
 
   </div>
    </>
  )
}

export default App
