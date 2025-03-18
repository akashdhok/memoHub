import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyNotes = () => {
  const [apiData, setApiData] = useState([]);
  const [imageData, setImageData] = useState([]);

  const loadData = async () => {
    try {
      let api = `http://localhost:8000/user/shownote/?userid=${localStorage.getItem("id")}`;
      const res = await axios.get(api);
      setApiData(res.data.notes);
      setImageData(res.data.images[0].image);
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

const editData = async(id)=>{
  let api = `http://localhost:8000/note/editdata/${id}`
  let res = await axios.post(api)
  console.log(res.data)
}

  return (
    <>
      <Container fluid className="mt-4">
        <h2 className="text-center text-primary mb-4">My Notes</h2>
        <Row className="justify-content-center">
          {apiData.map((e, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="shadow-lg border-0 rounded-lg">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="text-primary fw-bold">{e.head}</Card.Title>
                    <div className="icon-container">
                      <FaEdit className="edit-icon" title="Edit Note" onClick={()=>editData(e._id)}/>
                      <MdDelete className="delete-icon" title="Delete Note" />
                    </div>
                  </div>
                  <Card.Text className="text-secondary">{e.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <h2 className="text-center text-success mt-5 mb-4">Uploaded Images</h2>
        <Row className="justify-content-center">
          {imageData.map((key, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0">
                <Card.Img
                  variant="top"
                  src={`http://localhost:8000/${key}`}
                  alt="Uploaded Image"
                  className="img-fluid rounded hover-effect"
                />
                
              </Card>
              <div className="icon-container">
                      <MdDelete className="delete-icon" title="Delete Note" />
                    </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>
        {`
          .hover-effect {
            transition: transform 0.3s ease-in-out;
          }
          .hover-effect:hover {
            transform: scale(1.05);
          }
          .icon-container {
            display: flex;
            gap: 10px;
          }
          .edit-icon, .delete-icon {
            font-size: 1.4rem;
            cursor: pointer;
            transition: color 0.3s ease-in-out, transform 0.2s;
          }
          .edit-icon:hover {
            color: #007bff;
            transform: scale(1.2);
          }
          .delete-icon:hover {
            color: #dc3545;
            transform: scale(1.2);
          }
        `}
      </style>
    </>
  );
};

export default MyNotes;
