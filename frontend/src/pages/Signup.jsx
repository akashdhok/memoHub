import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Signup = () => {
    const[input , setInput]  = useState({})
    const navigate = useNavigate()
    const changeHandler = (e)=>{
        let{name , value} =  e.target;
        setInput({
            ...input,
            [name] : value
        })
    }
    const submitHandler = async(e)=>{
        e.preventDefault();
        let api = "http://localhost:8000/user/signup"
        try {
            let res = await axios.post(api , input)
            console.log(res.data)
            alert("data inserted")
            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    } 

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor : "grey"}}>
      <Card
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="name" onChange={changeHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name="email" onChange={changeHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" onChange={changeHandler} />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{
              transition: "0.3s",
              fontWeight: "bold",
            }}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Signup;
