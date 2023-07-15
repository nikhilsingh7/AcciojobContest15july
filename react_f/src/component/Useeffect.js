import React,{useState,useEffect} from 'react';
const Useeffect=()=>{

    const[clicked,setClicked]=useState();
    const[count,setCount]=useState(0);
    useEffect(()=>{
        alert("we are in use effect");
    },[clicked,count])
    return(
        <>
        <button onClick={()=>setClicked("nikhil Clicked")
        }>Nikhil Button</button>
        <br/><hr/>
        <button onClick={()=>setClicked("Manu Clicked")
        }>Manu Button</button>
        <br/><hr/>
        <button onClick={()=>setClicked("Amit Clicked")
        }>Amit Button</button>
        <br/><hr/>
        <h1>{clicked}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>{count}</h1>
        </>

    )
}
export default Useeffect;