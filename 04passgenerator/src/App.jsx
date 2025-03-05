/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useCallback, useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
const [length,setLength]=useState("8");
const [numAllowed,setnumAllowed]=useState(false);
const[charAllowed,setcharAllowed]=useState(false);
const[password,setPassword]=useState("");
const[copied,setCopied]=useState(false);
//useRef hook
const passwordReff= useRef(null)
const passGenerator=useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrstuvwxyz"
if(numAllowed) str+="0123456789"
if(charAllowed) str+="!@#$%^&*(){}[]~`"
for(let i=1;i<=length;i++){
  // const element=str[i];
  let char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char)
}
setPassword(pass);
},[length,numAllowed,charAllowed,setPassword])
const copyToClipboard=useCallback(()=>{
  passwordReff.current?.select();
  // passwordReff.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
  setCopied(true);
  setTimeout(() => setCopied(false), 1500);
},[password])
useEffect(()=>{
  passGenerator();
},[length,numAllowed,charAllowed,setPassword])
  return (
    <>
    <div className="bg-gray-600 mt-10 px-10 py-4 my-8 w-2xl rounded">
      <h1 className="text-white text-center my-3 text-2xl ">Password Generator</h1>
      <div className="flex shadow rounded-md overflow-hidden mb-4 ">
      <input 
      type="text"
      value={password}
      className="bg-white
      w-full
      h-8"
      placeholder="Password"
      readOnly
      ref={passwordReff}
      />
      <button
      onClick={copyToClipboard}
      className="outline-none bg-blue-500 hover:cursor-pointer hover:bg-blue-600 w-12"
      >copy</button>
      {copied && ( // 🔹 Show message only when "copied" is true
            <span className="absolute right-129 top-66  bg-green-500 text-white text-xs px-2 py-1 rounded transition-discrete duration-200 opacity-100 animate-none">
              Copied!
            </span>
          )}
      </div>
      <div className="flex text-sm gap-x-3 cursor-pointer">
        <div className="flex items-center gap-x-1"><input
        type="range"
        min={8}
        max={50}
        className="cursor-pointer"
        value={length} 
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label className="text-orange-400 ">Length:{length}  </label>
        </div>
        <div
        className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          className="cursor-pointer"
          onChange={()=>{
            setnumAllowed((pre)=>!pre)
          }}/>
           <label className="text-orange-400">Number</label>
           </div>
           <div
        className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          className="cursor-pointer"
          onChange={()=>{
            setcharAllowed((pre)=>!pre)
          }}/>
           <label className="text-orange-400">Character</label>
           </div></div>
    </div>
    </>
  )
}

export default App
