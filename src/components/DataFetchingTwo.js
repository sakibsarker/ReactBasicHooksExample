import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initial={
    loading:true,
    error:'',
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:'Something went wrong'
            }
        default:
            return state
    }

}

function DataFetchingTwo() {
    const[state,dispatch]=useReducer(reducer,initial)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS',payload:res.data})
            console.log("FETCH")
        })
        .catch(error=>{
            dispatch({type:"Error"}) 
          
        })
    },[])
  return (
    <div>{state.loading?'Loading':state.post.title}
    {state.error?state.error:null}</div>
  )
}

export default DataFetchingTwo