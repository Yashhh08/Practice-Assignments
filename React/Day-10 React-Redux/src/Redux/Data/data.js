import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const dataSlice = createSlice({
    name: 'krp',
    initialState: {
        loading: true,
        data: [],
        userInfo: {},
        error: false,
        theme: "Dark"
    },
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = payload
        },
        setData: (state, { payload }) => {
            state.data = payload;
        }
    }
})

export const { setLoading, setData } = dataSlice.actions;

export const getData = (body) => async (dispatch) => {
    try {
        const response = await axios.get('https://api.instantwebtools.net/v1/airlines');
        console.log(response.data)
        dispatch(setData(response.data));
    }
    catch (err) {
        //   console.log(err, 'this is error')
    }
}

export default dataSlice.reducer;