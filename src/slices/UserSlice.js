import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";
const initialstate = {
    uname:'',
    pwd:'',
};
const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers:{
        insert:(state,action)=>
        {
            userService.insertUser(action.payload);
        }
    }
})
export const {insert} = UserSlice.actions;
export default UserSlice.reducer;