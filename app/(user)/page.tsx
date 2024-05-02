'use client'

import CardProductComponent from "@/components/card/CardProductComponent";
import { useEffect, useState } from "react";

const ENDPOINT ='https://store.istad.co/products/';
type ProductType={
    readonly id:number,
    title:string;
}
 const  Page=()=>{
    const [products,setProducts] =useState<ProductType[]>([]);
 
    useEffect(() => {
        fetch(ENDPOINT)
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);

    return(
        <div>
            {products.map((product:any,index)=>(
                <CardProductComponent key={index} />
            ))}
        </div>
    )
}
export default Page;
