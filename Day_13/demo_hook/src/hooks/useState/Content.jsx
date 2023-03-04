import React, { useState } from 'react'

function Content() {
    const [user, setUser] = useState({
        id:1,
        name:"Nguyen Van A",
        email: "nguyenvana@gmail.com"
    })
    const [products,setProducts] = useState([
        {id:1,name:"Product 1",price:100},
        {id:2,name:"Product 2",price:200},
        {id:3,name:"Product 3",price:300},
    ])
    const randomName = ()=>{
        const rdName = `New name ${Math.floor(Math.random()*1000)}`
        setUser({...user,name: rdName})
      }
    const randomPrice = ()=>{
        const productID = 1;
        const rdPrice =Math.floor(Math.random()*1000);
        const newProducts = products.map(p=>{
            if(p.id === productID){
                return{...p,price:rdPrice}
            }
            return p
        })
        setProducts(newProducts)
      }
    const deleteProduct = (id)=>{
        const newProducts = products.filter(p=>p.id !== id)
        setProducts(newProducts)
    }
    const [count,setCount] = useState(0)
    const addCount = ()=>{
        setCount(count+1);

    }
  return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={addCount}>Add</button>
        <hr />
        <h2>User</h2>
        <p>
            {user.id}-{user.name}-{user.email}
        </p>
        <button onClick={randomName}>Random Name</button>
        <hr />
        <h2>Products</h2>
        <ul>
            {products.map(p=>(
                <li key={p.id}>
                    {p.id}-{p.name}-{p.price}
                    <button onClick={()=>deleteProduct(p.id)}>Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={randomPrice}>Random price</button>
    </>
  )
}

export default Content