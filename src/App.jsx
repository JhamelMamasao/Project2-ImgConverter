import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='min-h-screen items-center justify-center flex bg-[#1f1f1f] font-poppins'>
        <div className='w-full flex max-w-sm md:max-w-md h-80 items-center justify-center  bg-[#242525] border-2 border-[#292e31] rounded-2xl'>
          <div className='flex flex-col items-center space-y- w-full p-4'>
               <h1 className='text-[#f1f1f1] text-sm lg:text-xl font-semibold'>Image Converter</h1>
               <p className='text-[#848689] text-xs'>Convert your images instantly to your desired format.</p>
               
              <div className='flex items-center justify-center w-full mt-3 flex-col space-y-3'>
                    <button className='w-full bg-[#f1f1f1] border-2 border-[#292e31] rounded-lg h-12'>s</button>
                    <button className='w-full bg-[#242525] border-2 border-[#292e31] rounded-lg text-white h-12'>ssss</button>
                                     
              </div>
              
          </div>
        </div>
     </div>
    </>
  )
}

export default App
