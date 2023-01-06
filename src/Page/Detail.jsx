import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';
import { Context1 } from "../App";
import { useContext } from "react";


    let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
`
    let box = styled.div`
        background : grey;
        padding : 8px 16px;
        
    `
    const Detail = (props) => {
        // state 보관함 해체 함수
        let {재고, shoes} = useContext(Context1);

        let [count, setCount] = useState(0);
        let [alert,setAlert] = useState(true);
        let [num,setNum] = useState('');
    
        let {id} = useParams();
        let 찾은상품 = props.shoes.find((x)=>{
            return x.id == id;
        });
        let [tap,setTap] = useState(0);
        
        


    useEffect(()=>{
        let a = setTimeout(()=>{
            setAlert(false)
        },2000)
        return () => {
            clearTimeout(a);
        }
    }, []); 
    
    useEffect(()=>{
        if (isNaN(num) == true ){
            alert('그러지마세요')
        }
    },[num])


        return ( 
            <div>
            <div className="container">
                {
                    alert ? (
                        <div>
                            2초이내 구매시 할인
                        </div>
                    ) : null
                }



                {count}
                <button onClick={()=>{setCount(count+1)}}>버튼</button>
        <div className="row"> 
        <div className="col-md-6">
        <img src={'https://codingapple1.github.io/shop/shoes'+id+'.jpg'} width="100%" />
        </div>
        <input type="text" onChange={(e)=>{
            setNum(e.target.value);
        }}/> 
        <div className="col-md-6"> 
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p> 
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
        </div> 
    </div> 
    </div>    
        <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
            <Nav.Link onClick={()=>{
                setTap(0)
            }} eventKey="link-0">Option 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={()=>{
                setTap(1)
            }} eventKey="link-1">Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={()=>{
                setTap(2)
            }} eventKey="link-2">Option 2</Nav.Link>
        </Nav.Item>
        </Nav>        
        <Tapcontent tap={tap} />
            

            </div>
        );
    } 

    
function Tapcontent(props) {
    let [fade,setFade] = useState('')
    let {재고} = useContext(Context1);
    

    useEffect(()=>{
        setTimeout(()=>{setFade('end') },100)
        // 클린업 함수 return () => {} 위에 유즈이펙트 함수 실행전에 
        // 먼저 실행하는 정리하는 함수
        return ()=> {
            setFade('')
        }
    },[props.tap])


    if (props.tap == 0 ) {
        return <div className={'start '+fade}>내용0</div>
    } else if (props.tap == 1) {
        return <div className={'start '+fade}>내용1</div>
    } else {
        return <div className={'start '+fade}>내용2</div>
    }
}

    export default Detail;