import { useMemo } from 'react';
import { memo, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../store';
import {  changeName, increase } from '../store/userSlice';

// memo
// 특정상황에서만 재렌더링해줌 (props가 변할때)

// useMemo 
function 함수() {
    return 
}
    


const Cart = () => {
    // store 가져와줌
    let state = useSelector((state)=>{return state })
    // 액션함수 호출
    let dispatch = useDispatch();
    let [count,setCount] = useState(0)
    // useMemo 꼭 필요할 때만 쓰고싶을때 
    let result = 함수();
    useMemo(()=>{ return 함수()},[])
    
    return (  
        <div>
            
            <button onClick={()=>{ setCount(count+1)}}>+</button>
            <h6> 
            {state.user.name} {state.user.age}의 장바구니
            </h6> 
            <button onClick={()=>{
                dispatch(increase(1))
            }}>버튼</button>
    <Table>
        <thead> 
            <tr>
            <th>#</th> 
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th> 
            </tr>  
        </thead>
        <tbody>
            {
                state.cart.map((cart,i)=>{
                    return (
                        <tr key={i}>
                        <td>{state.cart[i].id}</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].count}</td> 
                        <td>
                            <button onClick={()=>{
                                dispatch(addCount(state.cart[i].id))
                            }}>+</button> 
                        </td>
                        </tr>
                    )
                })
            }

        </tbody>
        </Table>
        </div>
    );
}

export default Cart;