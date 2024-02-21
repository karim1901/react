import { useEffect } from "react"
import { getProducts } from "./store/actions"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

function App() {

  const products = useSelector(state =>state.productsR.products )

  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  useEffect(()=>{console.log(products)},[products])

  return <div className="app">

  </div>
}

export default App
