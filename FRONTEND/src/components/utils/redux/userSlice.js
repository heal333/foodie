import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
    name: "user",
    initialState: {
        address: {},
    },
    reducers: {
        addAddress: (state, action) => {
            state.address.name = action.payload.name;
            state.address.phone = action.payload.phone;
            state.address.address1 = action.payload.address1;
            state.address.address2 = action.payload.address2;
            state.address.pincode = action.payload.pincode;
        },
        removeAddress: (state, action) => {
            state.address.pop();
        },
        clearAddress: (state, action) => {
            state.address = [];
        },
    },
});

// console.log(userSlice);
export const { addAddress, removeAddress, clearAddress } = userSlice.actions;
export default userSlice;
