import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [color, setColor] = useState("#212121")

  return (
    <div className='w-full h-full flex justify-center' style={{ backgroundColor: color }}>
      <div className='shadow-lg shadow-indigo-500/40 absolute bottom-0  p-2 m-2 bg-white rounded-2xl '>
      <h1 className='font-bold text-center inset-x-0  top-0'>Pick Color</h1>
      <div className='flex justify-evenly'>
      <button className='rounded-xl m-2 bg-red-500 hover:bg-red-800 p-2 focus:outline-none focus:ring focus:ring-red-400 ' onClick={
          () => { setColor("red") }
        } >Red</button>
        <button className=' rounded-xl m-2 bg-blue-500  hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 p-2 ' onClick={() => { setColor("blue") }} >
          Blue
        </button>

        <button className=' rounded-xl m-2 bg-green-500  hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-400 p-2 ' onClick={() => { setColor("Green") }} >
          Green
        </button>

        <button className=' rounded-xl m-2 bg-yellow-500  hover:bg-yellow-800 focus:outline-none focus:ring focus:ring-yellow-400 p-2 ' onClick={() => { setColor("yellow") }} >
          Yellow
        </button>
        <button className='  rounded-xl m-2 bg-gray-500  hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400 p-2 ' onClick={() => { setColor("gray") }} >
          Gray
        </button>
      </div>

      </div>
      

    </div>
  )
}

export default App
