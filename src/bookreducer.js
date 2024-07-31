import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
    name:'booklist',
    initialState:[],
    reducers:
    {
        addBook:(state,action)=>{
            state.push(action.payload)
        },
        deleteBook:(state,action)=>{
            return state.filter((book)=>book.id!=action.payload)
        },
        updateBook:(state,action)=>{
            console.log(action.payload.id)
            return state.map((book)=>book.id===action.payload.id?action.payload:book)
        }
    }
})
export const {addBook,deleteBook,updateBook} = BookSlice.actions;
export default BookSlice.reducer;