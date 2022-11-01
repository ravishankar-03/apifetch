
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
     axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setUsers(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      
        {
          <>
            {users.map((data) => (
              <Container>
                <Row>
                <Col>
                  <Card style={{ width: "18rem" }} className='mt-5'>
                    <Card.Header>Card Header</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>UserId: {data.userId}</ListGroup.Item>
                      <ListGroup.Item>id: {data.id}</ListGroup.Item>
                      <ListGroup.Item>title: {data.title}</ListGroup.Item>
                      <ListGroup.Item>completed: {data.completed ? 'True' : 'False'}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                  </Col>
                  </Row>
                </Container>
              
            ))}
          </>
        }
      
    </>
  );
}

export default App;
