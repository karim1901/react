import axios from "axios"
import { LOAD_DATA } from "./types"


export const getProducts = ()=>{
    return async(dispatch) =>{
        const resp = await axios.get('https://dummyjson.com/products')
        dispatch({
          type:LOAD_DATA,
          data:resp.data.products
        })
      }
}

