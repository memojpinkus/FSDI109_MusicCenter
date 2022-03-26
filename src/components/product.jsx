import "./product.css";
import QtyPicker from "./qtyPicker";
import { useState } from "react";

const Product = (props) =>{

    const [quantity, setQuantity] = useState(1);

    const onQtyChange = (value) =>{
        console.log("Quantity changed to: ", value);
        setQuantity(value);
    };

    const getTotal = () =>{
        let total = quantity * props.data.price;
        return "$"+total.toFixed(2);
    }

    return(<div className="product">
            <img src={"/imgs/"+props.data.image} alt="product img"></img>
            <h2>{props.data.title}</h2>
            <label className="price">Price: ${props.data.price}</label>
            <label className="total">Total: ${getTotal(quantity)}</label>
            <QtyPicker onChange={onQtyChange}></QtyPicker>
            <button>Add</button>
            </div>)
}

export default Product;