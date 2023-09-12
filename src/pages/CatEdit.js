import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const CatEdit = ({ cats, updateCat}) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)


  const [editCat, setEditCat] = useState ({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  })

  const handleChange = (e) =>{
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate("/catindex")
  }
    // console.log(editCat)
  return (
    <>
      <h2>Edit your kitty kitty here!</h2>
      <Form>
        <FormGroup>
          <Label for="name">Update your kitties name:</Label>
          <Input
            id="name"
            name="name"
            placeholder="Update kit kat"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Did your cat have a birthday?</Label>
          <Input
            id="age"
            name="age"
            placeholder="Update cats age"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">What new hobbies does your cat have?</Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="Update new hobbies here"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">New threads? Update your cat:</Label>
          <Input
            id="image"
            name="image"
            placeholder="Drop your new picture here"
            type="url"
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit} name="submit">Submit</Button>
    </>
  );
};

export default CatEdit;
