import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

// state 보관함

let stock = createSlice({
    name : 'stock', 
    initialState : [10,11,12]
}) 

let cart = createSlice({
    name : 'cart',  
    initialState : [
        {id : 0, name : 'white and Black', count: 2},
        {id : 2, name : 'Grey Yordan', count: 1},        
    ],
    
    reducers : { 
        addCount(state,action) {
            let 번호 = state.findIndex((a)=>{return a.id === action.payload })
            state[번호].count++             
        },
        addItem(state, action) {
            state.push(action.payload) 
        } 
    }
}) 


export let { addCount, addItem } =cart.actions

export default configureStore({
    // 여기에 state 등록해야함
    reducer: { 
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }


})

