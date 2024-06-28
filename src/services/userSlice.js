/* eslint-disable no-unused-vars */


import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(sessionStorage.getItem("user")) || {
    id: "",
    fullName: "",
    nationalNumber: "",
    dateOfBirth: "",
    gender: "",
    accountStatus: "",
    role: "",
    centerID: "",
    centerName:""
};

const userSlice = createSlice ({
    name:"auth",
    initialState:savedUser,
    reducers: {
    setUser(state, action) {
        return { ...state, ...action.payload };
    },
    clearUser(state) {
        return {
            id: "",
            fullName: "",
            nationalNumber: "",
            dateOfBirth: "",
            gender: "",
            accountStatus: "",
            role: "",
            centerID: ""
        };
    }
    }
    })
export const  {setUser,clearUser} = userSlice.actions 
export default userSlice.reducer;        