import React from 'react'
type PropsType = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

  const ENDPOINT ='https://store.istad.co/products/';
  const fetApi=async(id:string)=>{
    const res=await fetch(`${ENDPOINT}${id}`);
    const data=await res.json();
    return data;
  }
  
export default async function page(props:PropsType) {
    const data=await fetApi(props.params.id)
  return (
    <div>
      
    </div>
  )
}
