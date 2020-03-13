import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Product name={products[0].name} price={products[0].price}/> */}
        <Product product={products[0]}/>
        <Product product={products[1]}/>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    color: 'blue',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  };

  //Destructuring from props
  const {name, price} = props.product;
  console.log(name, price);
  
  return(
    <div style={productStyle}>
      {/* <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4> */}
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
