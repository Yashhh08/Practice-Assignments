import { configureStore } from "@reduxjs/toolkit";
import data from "./Data/data";
import Login from "./Login/Login";

export const store = configureStore({
    reducer: {
        data: data,
        login: Login
    }
})
