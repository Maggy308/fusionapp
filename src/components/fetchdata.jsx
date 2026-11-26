import {useEffect, useState} from "react";

export default function ApiData() {
    const [products, setProducts] = useState([])

    async function fetchData() {
        const Response = await fetch("https://dummyjson.com/products");
        if (Response.ok) {
            const data = await Response.json();
            console.log(data.products[0]);
            setProducts(data.products)
        } else {
            console.log(Response)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    const productList = products.map(item =>
        <div className="col-sm-4 col-md-3 text-center border p-2">
            <img src={item.thumbnail} alt=""/>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
    </div>)

    return (<>
       <div className="container">
           <div className="row">
               {productList}
           </div>

       </div>

    </>)
}
