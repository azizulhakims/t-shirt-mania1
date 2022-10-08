import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p> Please buy at least one item !!!</p> 
    }
    else if (cart.length === 1){
        message = <div>
            <h3>Amar Jonno akta nao</h3>
            <p>tomar nijer jonno ekta</p>
            <h3><small>amar jonno arekta nao, Please</small></h3>
        </div>
    }
    else{
        message = <p>Thanks for buying!!!</p>
    }

    return (
        <div>
            <h3 className={cart.length===2 ? `orange` : `purple`}>Order Summery</h3>
            <h5 className={`bold ${cart.length ===2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }

            {cart.length === 3 ? <p>tin jon ke gift diba</p> : <p>kino kino</p>}
            <p>and Operator</p>
            {cart.length === 2 && <h2>Double items</h2>}
            <p>Or Operator</p>
            {cart.length === 4 || <p>Charta item na </p>}
        </div>
    );
};

export default Cart;

