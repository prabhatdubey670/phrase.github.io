import React , {useState} from 'react'

export default function texthtmlForm(props) {
 
  const [text,setText] = useState(''); //using state change here 
  const [option, setOption] = useState(false);

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
 

  return (
    <>
    <div className=" absolute top-6 right-60 bg-opacity-20 bg-gray-300 mt-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md">
     
      <section className="text-gray-600 body-font relative">
  <div className="container px-10 py-6 mx-auto">
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
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Type text</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handleChange} value={text}></textarea>
          </div>
        </div>
        {/* <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>Click to Make text uppercase</button>

        </div> */}
        <select name="Change State" id="state" className='p-5' onChange={()=>
        setOption}>
          <option value="UpperCase"  >Change to Upper Case</option>
          <option value="LowerCase" >Change to Lower Case</option>
        </select>
        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 mt-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleclick}>Click to Change !</button>
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
  
</section>
    </div>
  
    </>
  )
}
