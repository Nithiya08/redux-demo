
import {createSlice} from '@reduxjs/toolkit'
//state and actions
export const counterSlice=createSlice({
 name:'counter',
initialState:{count:0},
reducers:{
    increment:(state,action)=>{
        state.count=state.count+1
    },
    decrement:(state,action)=>{
        state.count=state.count-1
    },
    incrementById:(state,action)=>{
state.count=state.count+action.payload
    }
}
})
export const {increment,decrement, incrementById}=counterSlice.actions 
export default counterSlice.reducer //these for the store getting the value reducer is predefined 