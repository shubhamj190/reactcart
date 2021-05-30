import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import BuySection from './components/BuySection';
import {Container, Col, Row} from 'reactstrap'
import Cart from './components/Cart';


function App() {

  const [cartItem, setCartItem] = useState([])

  const addInCart = item =>{

    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id===item.id
    })
    
    if(isAlreadyAdded!=-1){
      toast("already added in the cart ", {
        type:"error"
      })
      return;
    }
    setCartItem([...cartItem, item])
  }

  const buyNow = ()=>{
    setCartItem([])
    toast("Purchase Success", {
      type:"success"
    })
  }

  const removeItem = item =>{
    setCartItem(cartItem.filter(singleItem=>singleItem.id !==item.id))
  }

  return (
    <Container fluid>
      <ToastContainer/>
        <Row>
          <Col md={8}>
            <BuySection addInCart={addInCart}/>
          </Col>
          <Col md={4}>
            <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
          </Col>
        </Row>
      
    </Container>

    

  )
}

export default App;
