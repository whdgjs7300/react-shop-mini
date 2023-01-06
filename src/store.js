import { configureStore, createSlice } from "@reduxjs/toolkit";

// state 보관함
let user = createSlice({
    name : 'state이름~~',
    initialState :' kim',

})

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
}) 

let cart = createSlice({
    name : 'cart', 
    initialState : [
        {id : 0, name : 'white and Black', count: 2},
        {id : 2, name : 'Grey Yordan', count: 1}
    ]
})


export default configureStore({
    // 여기에 state 등록해야함
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }


})

