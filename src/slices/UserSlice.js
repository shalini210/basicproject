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
    console.log("inside delete thunk")
    console.log(data)
    const response = await userService.deleteUser(data);
    return response.data;
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
        builder.addCase(insertUser.fulfilled,(state,action)=>
        {
            console.log("user Inserted");
            // console.log(action.payload);
            return action.payload;
        });
        builder.addCase(insertUser.rejected,(state,action)=>
        {
            console.log("error in inserting user");
            console.log(action.payload)
        });
        builder.addCase(updateUser.fulfilled,(state,action)=>
        {
            console.log(action.payload);
        });
        builder.addCase(updateUser.rejected,(state,action)=>
        {
            console.log(action.payload)
        });
        builder.addCase(deleteUser.fulfilled,(state,action)=>
        {
            console.log(action.payload)
        })
    }
})
export const {insert} = UserSlice.actions;
export default UserSlice.reducer;