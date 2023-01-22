import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUS=Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const productSlice=createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchProducts.pending, (state,action)=>{
            state.status=STATUS.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.data=action.payload;
            state.status=STATUS.IDLE;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.status=STATUS.ERROR;
        })
    }
})

export default productSlice.reducer;

export const fetchProducts=createAsyncThunk('product/fetch',async()=>{
    const res=await fetch('https://fakestoreapi.com/products');
    const data=await res.json();
    return data;
})