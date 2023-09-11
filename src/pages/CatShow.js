import React from 'react'
import { useParams } from "react-router-dom"


const CatShow = ({ cats }) => {
  const { id } = useParams()
  
  let showCat = cats.find((cat) => cat.id === +id)

  return (
    <> 
    {/* <div className="page-body"> */}
    <div className="card-show, card-body"> 
    <img className="cat-image"
    alt={`profile picture of ${showCat.name}`}
    src={showCat.image}/>
    <h3 className="show-text">{showCat.name} loves {showCat.enjoys}</h3>
    </div>
    {/* </div> */}
    </>
  )
}

export default CatShow