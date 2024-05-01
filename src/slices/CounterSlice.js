import {createSlice} from "@reduxjs/toolkit"
const initialState={
    value:0,
    username:"raman",
}

export const counterslice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>
        {
            state.value+=1;
            state.username = "john ";
        },
        decrement:(state)=>
        {
            state.value-=1;
            state.username = "jhn ";
        }
    }

})
export const {increment,decrement} = counterslice.actions;
export default counterslice.reducer;