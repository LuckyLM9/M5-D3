import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SingleBook = ({img, asin, title, price, category}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{asin}</Card.Title>
        <Card.Title>{price} €</Card.Title>
        <Card.Title>{category}</Card.Title>
        <Button variant="primary">Vai al Book</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleBook