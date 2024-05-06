import React from 'react'
type CardTestProps={
    name: string;
    id:number
}
const CardTestComponent = ({id, name}:CardTestProps) =>{
  return (
    <div>{name}</div>
    
  )
}
export default CardTestComponent;