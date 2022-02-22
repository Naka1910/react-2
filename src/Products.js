import axios from "axios";
import { useEffect, useState } from "react"

export default function Products(){
    const[products,setProducts] =useState([]);
    function getData(){
        axios.get('https://retoolapi.dev/FNoduP/products')
        .then(response =>{
            setProducts(response.data)
        })
        .catch(error =>{
            console.log(error)
        })

    }
    useEffect(()=>{
    getData()
    },[])
    return(
        <div className="cont">
            {
                products.map((item,index)=>{
                    return(
                        <div key={index}>
                            <p>{item.id}</p>
                            <img className="prod-img" src={item.image} alt={item.image} />
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })
      
            }
        </div>
    )
}