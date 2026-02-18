import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const reader = new FileReader()

  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
       const canvas = document.createElement("file")
       canvas.width = img.width;
       canvas.height = img.height;
   const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Example: convert to JPEG Blob
      canvas.toBlob((blob) => {
        console.log(blob); // pwede mo i-download or i-upload
      }, 'image/jpeg', 0.9);
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);

  return (
    <>
     <div className='min-h-screen items-center justify-center flex bg-[#1f1f1f] font-poppins'>
        <div className='w-full flex max-w-sm md:max-w-md h-80 items-center justify-center  bg-[#242525] border-2 border-[#292e31] rounded-2xl'>
          <div className='flex flex-col items-center space-y- w-full p-4'>
               <h1 className='text-[#f1f1f1] text-sm lg:text-xl font-semibold'>Image Converter</h1>
               <p className='text-[#848689] text-xs'>Convert your images instantly to your desired format.</p>
               
              <div className='flex items-center justify-center w-full mt-5 flex-col space-y-3'>
                    <label className='w-full bg-[#242525] border-2 border-[#292e31] rounded-lg text-white h-12 flex items-center justify-center text-xs'>{loading ? "✓ Image Selected" : "Upload Image"}<input
                    type="file"
                    className='hidden'
                    onChange={handleFileChange}/>
                    </label>
                    <form className='w-full bg-[#242525] border-2 border-[#292e31] rounded-lg text-white h-12 flex items-center justify-center text-xs p-3'>
                    <select className='w-full border-none outline-none focus:outline-none focus:ring-0 bg-[#242525]' name="type" id="type">
                         <option value="volvo">PNG</option>
                         <option value="volvo">JPEG</option>
                         <option value="volvo">WEBP</option>
                    </select>
                    </form>
                    
                    <button className='w-full bg-[#242525] border-2 border-[#292e31] rounded-lg text-white h-12'>ssss</button>
                    <button className='w-full bg-[#f1f1f1] border-2 border-[#292e31] rounded-lg h-12'>s</button>
                                     
              </div>
              
          </div>
        </div>
     </div>
    </>
  )
}

export default App
