import { useState } from "react";
import store from "./storeContext"

const GlobalState = (props) => {

    const [cart, setCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});
    
    const addProdToCart = (prod) => {
        console.log("Adding prod to state");

        let copy = [...cart];

        let found = false;

        for(let i = 0; i<copy.length; i++){
            let prodInCart = copy[i];
            if(prodInCart._id === prod._id){
                //found a match
                prodInCart.quantity = prodInCart.quantity + prod.quantity;
                found = true;
            }
        }

        if(!found){
            copy.push(prod);
        }
    };

    const removeProdFromCart = () =>{
        console.log("Removing prod from cart");

        let copy = [...cart];
        copy.splice(props);
        setCart(copy);
    }

    return (
        <store.Provider value={{cart: cart, user: loggedInUser, addProdToCart: addProdToCart, removeProdFromCart: removeProdFromCart}}>
            {props.children}
        </store.Provider>
    );
};

export default GlobalState;