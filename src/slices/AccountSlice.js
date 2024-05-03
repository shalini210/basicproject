import { createSlice } from "@reduxjs/toolkit";
const initialState=
{
    balance:0,
    name:'John',
}
const AccountSlice = createSlice({
    name:"Account",
    initialState,
    reducers:{
        
        deposite:(state,action)=>
        {
state.balance+= action.payload;
        },
        Withdraw:(state,action)=>
        {
            state.balance -= action.payload;
        }
    }
})
export const {deposite,Withdraw} = AccountSlice.actions;
export default AccountSlice.reducer;