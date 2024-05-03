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
        },
        incrementbyValue:(state,action)=>
        {
            state.value+= action.payload;
        }
    }

})
export const {increment,decrement,incrementbyValue} = counterslice.actions;
export default counterslice.reducer;