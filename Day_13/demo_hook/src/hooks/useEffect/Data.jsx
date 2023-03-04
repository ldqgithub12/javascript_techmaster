import React, { useEffect, useState } from 'react'

function Data() {
    const [data,setData] = useState([]);
    const [type,setType] = useState("posts")
    useEffect(()=>{
        const fetchData = async ()=>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        const dataJson = await data.json();
        setData(dataJson)
        };
        fetchData();
    },[type]);
  return (
    <div>
        <h2>Type: {type}</h2>
        {["posts","photos","albums"].map((item)=>(
            <button onClick={()=>{
                setType(item)
            }}
            style={type===item ? {color:"white",backgroundColor:"red"}:null}>{item}</button>
        ))}
        <ul>
            {data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Data