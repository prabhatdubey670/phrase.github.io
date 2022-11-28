import React from 'react'

function Background() {
  return (
    <div className="relative  flex flex-row bg-inherit">
       <div className="rounded-full  -left-48 top-28 h-96 w-96 bg-gradient-to-b from-yellow-500 to-red-500 animate-bounce absolute"></div>
       <div className="rounded-full  left-96 top-44 ml-96 h-96 w-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-bounce absolute"></div>
       
    </div>
  )
}

export default Background
