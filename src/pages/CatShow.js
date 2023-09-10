import React from 'react'
import { useParams } from "react-router-dom"


const CatShow = ({ cats }) => {
  const { id } = useParams()
  
  let showCat = cats.find((cat) => cat.id === +id)

  return (
    // <div>Show the kitkat</div>
    <> 
    <img 
    alt={`profile picture of ${showCat.name}`}
    src={showCat.image}/>
    <h3>{showCat.name} loves {showCat.enjoys}</h3>
    </>
  )
}

export default CatShow