import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Btn from "../btn"

function App() {

  const [products ,setProducts] =useState([])

  const getData = async()=>{
    const resp = await fetch('https://dummyjson.com/products').then(resp => resp.json() )
    
    setProducts(resp.products)
    console.log(resp.products)
  }

  useEffect(()=>{
    getData()
  },[])




  return <div className="app">
    <Btn >
      <form action="">
        <input type="text" />
        <input type="text" />
        <button>add</button>
      </form>
    </Btn>
    {
      products.map(product =>{
        return <div className="product">
          <img src={product.thumbnail} alt="" />
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      })
    }
  </div>
}

export default App
