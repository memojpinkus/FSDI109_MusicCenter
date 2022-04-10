import axios from "axios";

var catalog=[
    {
        _id:"fender_strat",
        title:"Fender Stratocaster",
        price:449.99,
        stock:3,
        image:"strat.jpg"
    },
    {
        _id:"gibson_lespaul",
        title:"Gibson Les Paul",
        price:499.99,
        stock:2,
        image:"lespaul.png"
    },
    {
        _id:"fender_jazzmstr",
        title:"Fender Jazzmaster",
        price:479.99,
        stock:2,
        image:"jazzm.jpg"

    },
    {
        _id:"guitar_strap",
        title:"Guitar Strap",
        price:14.99,
        stock:10,
        image:"strap.jpg"

    },{
        _id:"guitar_strings",
        title:"Guitar Strings",
        price:4.99,
        stock:30,
        image:"strings.png"

    }
];


class DataService{

    async getCatalog(){
        //retrieve the data from the server 
        // var catalog = request();
        let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
        return resp.data;

        //mock the data
        //return catalog;
    }

    async getCoupons(){
        let resp = await axios.get("http://127.0.0.1:5000/api/couponCode");
        return resp.data;
    }

    saveProduct(prod){
        console.log("Saving prod to server");
    }

    async saveCouponCode(code){
        let resp = await axios.post("http://127.0.0.1:5000/api/couponCode", code)
        return resp.data;
    }

}

export default DataService;