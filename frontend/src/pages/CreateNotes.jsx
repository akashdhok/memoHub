import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPlus } from "react-icons/fa";
import axios from "axios"
const CreateNotes = () => {
    const[input , setInput] = useState({})
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
const id = localStorage.getItem("id")
const changeHandler = (e)=>{
    let{name , value} = e.target;
    setInput({
        ...input,
        [name] : value
    })
}
const submitHandler = async(e)=>{
    e.preventDefault()
    try {
        let api = "http://localhost:8000/note/createnote"
        let res = await axios.post(api , {userid : id , ...input})
        console.log(res.data)
        alert("Note Added")
    } catch (error) {
        console.log(error)
    }
}
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <hr />
          <h1 className="text-center">Welcome, {name}</h1>
          <p className="text-center text-muted">{email}</p>
          <h5 className="text-center">Create Notes</h5>
          <Form className="p-4 shadow rounded" style={{ backgroundColor: "#f8f9fa" }}>
            <Form.Group className="mb-3" controlId="formHeadline">
              <Form.Label>Headline</Form.Label>
              <Form.Control type="text" placeholder="Enter note headline" name='head' onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNoteText">
              <Form.Label>Write Brief Note</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your notes here..." name='text' onChange={changeHandler} />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" onClick={submitHandler}>
                Create Note <span><FaPlus /></span>
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateNotes;