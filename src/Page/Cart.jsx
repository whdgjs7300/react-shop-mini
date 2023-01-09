import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {  changeName, increase } from '../store';

const Cart = () => {
    // store 가져와줌
    let state = useSelector((state)=>{return state })
    console.log(state.user)

    let dispatch = useDispatch();

    return ( 
        <div>
            <h6>
            {state.user.name} {state.user.age}의 장바구니
            </h6> 
            <button onClick={()=>{
                dispatch(increase())
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
                        <td>1</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].count}</td> 
                        <td>
                            <button onClick={()=>{
                                dispatch(changeName())
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