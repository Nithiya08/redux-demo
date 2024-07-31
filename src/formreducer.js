import { createSlice } from "@reduxjs/toolkit";

export const formSlice=createSlice({
    name:'book',
    initialState:[{title:'',author:'',price:''}],
    reducers:{
        addBook:(state,action)=>{
            state.push(
               action.payload
            )
        },
        removeBook:(state,action)=>{
            return state.filter((book)=>book.id!==action.payload)
        }
    }
})
export const {addBook,removeBook} =formSlice.actions
export default formSlice.reducer