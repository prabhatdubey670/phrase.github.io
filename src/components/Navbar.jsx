 import React from 'react';
 
 export default function Navbar() {

   return (
    <header className="text-gray-600 body-font ">
    <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center ">
      <a className="flex title-font font-medium items-center text-indigo-500 mb-4 md:mb-0  " href="/">
       
        <span className="ml-10 text-2xl font-bold text-indigo-800 italic">TextUtiles </span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-black italic justify-center  ">
        <a className="mr-5 hover:text-indigo-500 " href="/">Textstate</a>
        <a className="mr-5 hover:text-indigo-500 " href="/">TextLang</a>
        <a className="mr-5 hover:text-indigo-500 " href="/">About</a>
        <a className="mr-5 hover:text-indigo-500 " href="/">Other products</a>
      </nav>
      <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-white mt-4 md:mt-0" id="nav_con" >Contact
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      
</div>
    
  </header>
   )
}