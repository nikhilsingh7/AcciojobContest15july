import React ,{useEffect,useRef,useState} from 'react'

function UseRef() {
 const[userInput,setUserInput]=useState("");
 const renders=useRef(0);
 useEffect(()=>{

    renders.current=renders.current+1;
 })

  return (
    <div>
        <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}   />
        <p>The component rendered{renders.current}Times</p>
      
    </div>
  )
}

export default UseRef;
