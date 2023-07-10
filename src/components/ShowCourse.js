import React from 'react'
import { Link, useParams } from 'react-router-dom'
import courses from '../courses'
import {
  Col,
  Row,
  Button,
  Container,
} from 'react-bootstrap'
import Rating from './Rating'

const ShowCourse = () => {
  const { id } = useParams()
  const course = courses.find((p) => p.id === id)
  return (
    <>
      <Container>
        <Link className='btn btn-light my-3' to='/course'>
          Go Back
        </Link>
        <Row>
          <h1>{course.name} </h1>
          <p>{course.description} </p>
        </Row>
        <Col>
          Rating : <Rating value={course.rating} />
        </Col>
        <Col className='py-3 text-end'>
          <Button>Buy Now</Button>
        </Col>
      </Container>
    </>
  )
}

export default ShowCourse
