import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';

const UploadImage = () => {
    const[myImage ,setMyImage] = useState([])

    const changeImage = (e)=>{
        setMyImage(e.target.files)
    }
    const submitHandler = async(e)=>{
        e.preventDefault();
        const formData = new FormData()
     for(let i = 0 ; i<myImage.length ; i++)
     {
        formData.append("image" , myImage[i])
     }
     let api = `http://localhost:8000/img/uploadimage/?userid=${localStorage.getItem("id")}`;
     const res = await axios.post(api , formData)
     alert("Image Uploaded")
     console.log(res.data)
    }
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", maxWidth: "1200px" }}>
      <Row className="w-100">
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <Card className="shadow-lg p-4" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <h2 className="text-center text-primary">Upload Image Here</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formFile">
                  <Form.Label className="fw-bold">Upload Images</Form.Label>
                  <Form.Control type="file" onChange={changeImage} multiple />
                  <Form.Text className="text-muted">
                    We'll never share your uploaded files with anyone else.
                  </Form.Text>
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" size="lg" onClick={submitHandler}>
                    Upload
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadImage;