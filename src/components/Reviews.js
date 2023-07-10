import React from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import '../styles/reviews.css'
import reviews from '../reviews'
import Rating from './Rating'

const Reviews = () => {
  return (
    <>
      <Container>
        <h2 className='text-center py-3 px-3'>Reviews</h2>
        <Row>
          <Col>
            <Carousel data-bs-theme='light'>
              {reviews.map((review) => (
                <Carousel.Item key={review.id}>
                  <Card className='review-card'>
                    <Card.Body>
                      <Card.Title>{review.name}</Card.Title>
                      <Card.Text>"{review.description}"</Card.Text>
                      <Rating value={review.rating} />
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Reviews
