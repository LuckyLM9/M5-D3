import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import history from '../data/databooks/history.json'
import romance from '../data/dataBooks/romance.json'

const Last = () => {
  return (
    <Container className="w-100">
    <Row xs={1} sm={2} md={3} lg={1} className="w-100">
      <Col className="d-flex inline-flex justify-content-between g-5">
        {
          history.map((book) => {
            return (
                <Card style={{ width: '20rem' }} key={book.asin} className="m-5">
                <Card.Img variant="top" src={book.img} style={{ height: '28rem'}}/>
                <Card.Body>
                <Card.Title className="text-truncate">{book.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>{book.category}</ListGroup.Item>
                <ListGroup.Item>{book.price}</ListGroup.Item>
                </ListGroup>
              </Card>)
          })
          }
      </Col>
    </Row>
    </Container>
  );
}

export default Last