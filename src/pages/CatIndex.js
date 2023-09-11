import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap"
import { NavLink } from "react-router-dom";

const CatIndex = ({ cats }) => {
  return (
    <>
    {cats.map((cat, index) => {
        return (
        <div className="page-body"> 
              <Card
                style={{
                  width: '18rem'
                }}
                key={index}>
                <img
                  alt="Sample"
                  src={cat.image}
                />
                <CardBody>
                  <CardTitle tag="h5">{cat.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>
              <Button>
                <NavLink to={`/catshow/${cat.id}`}> 
                show me the kitkat 🐈
                </NavLink>
              </Button>
                </CardBody>
              </Card>
              </div>
        )
      })
    }
    </>
  )
}


export default CatIndex