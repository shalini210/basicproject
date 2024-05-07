import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";
const initialState = {
    uname:'',
    pwd:'',
};
const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers:{
        insert:(state,action)=>
        {
           let x =  userService.insertUser(action.payload);
           console.log(x);
        }
    }
})
export const {insert} = UserSlice.actions;
export default UserSlice.reducer;