import { createSlice } from "@reduxjs/toolkit"


// state 보관함
let user = createSlice({
    name : 'user',
    initialState :{name : 'kim', age : 20},
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        increase(state, action) {
            state.age += action.payload 
        },
        
    },
})

// 함수 이름 다넣고 사용가능
export let { changeName, increase } = user.actions


export default user