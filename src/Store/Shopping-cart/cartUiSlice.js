import {createSlice} from '@reduxjs/toolkit'

const cartUiSlice= createSlice({
    name:'cartui',
    initialState:{cartIsvisible:false},

    reducers:{
        toggle(state){
            state.cartIsvisible= !state.cartIsvisible;
        }
    }
})

export const cartUiActions= cartUiSlice.actions;
export default cartUiSlice