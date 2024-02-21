import { LOAD_DATA } from "../types"


const init = {products:[]}

export const productsReducer = (state = init , action)=>{
    if(action.type == LOAD_DATA ){
        return {products:action.data}
    }else{
        return state
    }
}