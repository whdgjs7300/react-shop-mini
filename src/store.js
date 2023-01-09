import { configureStore, createSlice } from "@reduxjs/toolkit";

// state 보관함
let user = createSlice({
    name : 'user',
    initialState :{name : 'kim', age : 20},
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        increase(state) {
            state.age += 1 
        },
        
    },
        
})


// 함수 이름 다넣고 사용가능
export let { changeName, increase } = user.actions


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

