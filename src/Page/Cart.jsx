import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const Cart = () => {
    // store 가져와줌
    let state = useSelector((state)=>{return state })
    console.log(state.stock)
    return ( 

        <div>
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
            <tr>
            <td>1</td>
            <td>{state.cart[0].name}</td>
            <td>{state.cart[0].count}</td> 
            <td>안녕</td>
            </tr>

            <tr>
            <td>1</td>
            <td>{state.cart[1].name}</td>
            <td>{state.cart[1].count}</td> 
            <td>안녕</td>
            </tr>    
        </tbody>
        </Table>
        </div>
    );
}

export default Cart;