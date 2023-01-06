import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

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

        let [count, setCount] = useState(0);
        let [alert,setAlert] = useState(true);
        let [num,setNum] = useState('');
    
        let {id} = useParams();
        let 찾은상품 = props.shoes.find((x)=>{
            return x.id == id;
        });
    


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

            </div>
        );
    }

    export default Detail;