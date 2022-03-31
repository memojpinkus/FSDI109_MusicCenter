import "./cart.css";
import store from "../context/storeContext";
import { useContext } from "react";
import ProductInCart from "./productInCart";

const Cart = () =>{
    //get two or more elements from the store
    let {cart, addProdToCart} = useContext(store);

    return(
        <div className="Cart">
            <h1>Cart</h1>
            <h5>Are you ready to pay for the {cart.length} items in the cart.</h5>

            <div className="products">
                {cart.map((prod) => (
                    <ProductInCart key={prod._id} data={prod}></ProductInCart>
                ))}
            </div>
        </div>      
    );
};

export default Cart;