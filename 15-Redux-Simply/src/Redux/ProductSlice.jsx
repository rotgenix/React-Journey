import { createSlice } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    SUCCESS: 'SUCCESS',
    ERROR: 'error',
    Loading: 'LOADING'
});

const ProductSlice = createSlice({
    name: "Product",
    initialState: {
        data: [],
        status: STATUSES.SUCCESS,
    },
    reducers: {
        setproducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});


export const { setproducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;


export function fetchproducts() {
    return async function fetchproductThunk(dispath) {
        dispath(setStatus(STATUSES.Loading));
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispath(setproducts(data));
            dispath(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            console.log(error);
            dispath(setStatus(STATUSES.ERROR));
        }
    }
}