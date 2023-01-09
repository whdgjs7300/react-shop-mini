import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {createContext, useState} from 'react';
import data from './data';
import { Routes,Route, Link, useNavigate, Outlet } 
from 'react-router-dom';
import Detail from './Page/Detail';
import axios from 'axios';
import Cart from './Page/Cart';


export const Context1 = createContext();


function App() { 
  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
  let [count,setCount] = useState(0);
  let [재고] = useState([10,11,12]);


  return (  
    
  <div className="App">
      
    


      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
          <Link onClick={()=>{ navigate('/') }} to="/">홈</Link>
            <Link onClick={()=>{ navigate('/cart/') }} to="cart">cart</Link>
            
          </Nav> 
        </Container>
      </Navbar> 

    

    <Routes>
      <Route path='/' element={
        <div> 
            <div className='main-bg'> 
          </div> 
      <div className='container'>  
        <div className='row'>  
          { 
            shoes.map((a,i)=>{  
              return( 
                <Card shoes={shoes[i]} i={i+1}></Card>
              )  
            }) 
          }    
                    
        </div>
      </div>         
          <button onClick={()=>{
            setCount(count+1);
            axios.get(`https://codingapple1.github.io/shop/data2.json`)
            .then((resuit)=>{
              let copy = [...shoes, ...resuit.data];
              setShoes(copy);
            }) 
            

          }}>더보기</button>
        </div>
        
      } />  
      <Route path='/detail/:id' element={<Detail shoes={shoes}  />} /> 
      
      <Route path='/cart' element={<Cart/>}></Route>



      <Route path='/about' element={<About/>} > 
        <Route path='member' element={<div>멤버임</div>} /> 
        <Route path='location' element={<About/>} /> 
      </Route>
      
      <Route path='/event' element={<Event/>}>
        <Route path='one' element={<div>첫주문시 양배추즙 서비스</div>} />
        <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
      </Route>

    </Routes>
      
    </div>

  
  
  );
}
function About() {
  return ( 
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Event() {
  return(
    <div>
      오늘의이벤트
      <Outlet></Outlet> 
    </div>
  )
}




const Card = (props) => {
  return (   
      
<div className='col-md-4'>
          <img src={'https://codingapple1.github.io/shop/shoes' + props.i+'.jpg'} width="80%"/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
      </div>
      
  );
}



export default App;
