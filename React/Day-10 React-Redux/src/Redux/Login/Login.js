import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const LoginSlice = createSlice({
    name: "login",
    initialState: {
        token: "",
        login: {},
        isLogin: false,
    },
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setLogin: (state, { payload }) => {
            state.login = payload;
            state.isLogin = true;
        }
    }
})

export const { setToken, setLogin } = LoginSlice.actions;


export const loginFun = (body) => async (dispatch) => {
    try {

        let response = await axios.post('http://loalhost:2000/user/login', body);
        dispatch(setLogin(response.data));
    }
    catch (err) {
        // console.log(err);
    }
}
export default LoginSlice.reducer;