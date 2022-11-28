import React , {useState} from 'react'

export default function texthtmlForm(props) {
 const handleClick=()=>{
  console.log("Ur text has been changed : " + text) //na bhi ho tha chalega .....
  let newText = text.toUpperCase(); //function for changing state 
  setText(newText)
 }

 const handleclick=()=>{
  console.log("Ur text has been changed : " + text) 
  let newText = text.toLowerCase(); 
  setText(newText)
 }

 const handleChange=(event)=>{
  setText(event.target.value)
 }
 
  const [text,setText] = useState(''); //using state change here 


  return (
    <>
    <div className=" ">
     
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Change you text state here! </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{props.heading}</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          
        </div>
     
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">type text</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handleChange} value={text}></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>Click to Make text uppercase</button>
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 mt-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleclick}>Click to Make text lowercase</button>
          {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 mt-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handlelang}>Click to Change to Genz </button> */}
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a href="/" className="text-indigo-500">example@email.com</a>
          <p className="leading-normal my-5">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <a href="/" className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="https://www.w3schools.com/js/default.asp" className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
    
        </div>
        
      </div>
    </div>
    <div className="flex flex-column "> 
     <p className="text-centre ml-96 px-2 my-5 ">
      Characters in this paragraph : {text.length} ;<br />
     Words :  {text.split(" ").length} ;<br />
     Minutes it takes for reading : {0.008*text.split(" ").length} 
     </p>
    </div>
  </div>
  
</section>f
    </div>
  
    </>
  )
}
