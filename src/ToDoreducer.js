import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push( 
                {id:Date.now(),
                    task:action.payload,
                    completed:false
                }
            )
        },
        remove:(state,action)=>{
            return state.filter((todo)=>todo.id!=action.payload)
        },
        update:(state,action)=>{
            return state.map((todo)=>todo.id===action.payload?{...todo,completed:true}:todo)
        }
        
    }
})
export const {add,remove,update}=todoSlice.actions
export default todoSlice.reducer