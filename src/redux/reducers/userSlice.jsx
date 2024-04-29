// creating an slice for managing the user state managemnet 

import { createSlice } from "@reduxjs/toolkit";

// initial state for user 
const initialState = {
    user:null,
    loading:true,
    error:null,
    token:null,
    isLoggedIn:false
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        // creating an action to set the user 
        setUser:(state,action)=>{
            state.user = action.payload;
            state.loading = false;
            state.token = "1234"
            state.isLoggedIn = true;
        },
        // user login 
        login : (state,action) =>{
            console.log(action.payload)
            const data = action.payload;
            localStorage.setItem("userdeatils",data);
            state.user = data;
            state.isLoggedIn = true;
        },
        //  user logout 
        logout : (state,action) =>{
            localStorage.removeItem("userdeatils");
            state.user = null;
            state.isLoggedIn = false;
        }
    }
});
// exporting the slice reducer actions
export const {setUser , login ,logout} = userSlice.actions;
// exporting the reducer 
export default userSlice.reducer;