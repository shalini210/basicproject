import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import userService from "../services/userService";
const initialState = {
    uname:'',
    pwd:'',
};
export const getall  = createAsyncThunk("/select",async()=>
{
    const response = await userService.getAllUsers();
    return response.data;
})
export const insertUser = createAsyncThunk("/insert",async(data)=>
{
    console.log("inside insert thunk");
    const response = await userService.insertUser(data);
    return response.data;
})
export const updateUser =createAsyncThunk("/update", async(data)=>
{
    const response = await userService.updateUser(data);
    return response.data;
})
export const deleteUser = createAsyncThunk("/delete",async(data)=>
{
    const response = await userService.deleteUser(data);
});

const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers:{
        insert:(state,action)=>
        {
           let x =  userService.insertUser(action.payload);
           console.log(x);
        }
    },

    extraReducers:(builder)=>
    {
        builder.addCase("/insert",(state,action)=>
        {
            console.log("user Inserted");
            console.log(action.payload);
        });
    }
})
export const {insert} = UserSlice.actions;
export default UserSlice.reducer;