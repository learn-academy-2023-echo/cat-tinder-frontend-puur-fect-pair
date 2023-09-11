import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

// same as props + dn, just destructured
const CatNew = ({createKitty}) => {
  // storing the info that we're gathering here and setting to default value {obj, k:v}
  const [newKitty, setNewKitty] = useState ({
    name: "",
    age: "",
    enjoy:"",
    image:""
  })

  const navigate = useNavigate()

const handleChange = (e) => {
setNewKitty({...newKitty, [e.target.name]: e.target.value})
}

const handleSubmit = () => {
  createKitty(newKitty)
  navigate("/catindex")
}
  return (
    <>
    <div>
      <h2>Enter your Kitty here!</h2>
      <Form className="new-cat">
        <FormGroup>
          <Label for="name">
           New meow meow:
          </Label>
          <Input
            id="name"
          // input: attribute
            name="name"
            placeholder="enter your cats name here 😽"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
           How old is your kitkat:
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="enter your cats age here 😽"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
           what does you kitty enjoy?
          </Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="enter what your cat enjoys here 😽"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
           what does your cat look like??
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="please enter your cats image here 😻"
            type="url"
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit}>
    Submit
  </Button>
  </div>
    </>
  )
}

export default CatNew