import React from 'react'
import { Container, Col, Row, Button, Dropdown, Card } from 'react-bootstrap'
import '../styles/course-page.css'
import courses from '../courses'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const CoursePage = () => {
  return (
    <>
      <h3 className='text-center py-3 px-3'>Course Page</h3>
      <Container>
        <Row className='py-3'>
          <Col className='' sm={6}>
            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Filter
              </Dropdown.Toggle>
            </Dropdown>
          </Col>
          <Col sm={3} className='align-items-right'>
            <Link to='/add'>
              <Button variant='link'>Add Course</Button>
            </Link>
          </Col>
          <Col sm={3}>
            <Button>Edit Course</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {courses.map((course) => (
              <Card key={course.id}>
                <Card.Title>{course.name}</Card.Title>
                <Card.Body>
                  <Card.Text>
                    {course.description}
                    <Rating value={course.rating} color='gold' />
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CoursePage
