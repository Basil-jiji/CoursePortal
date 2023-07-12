import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Course = ({ course, deleteCourse, editCourse }) => {
  return (
    <>
      <Container>
        <div className=''>
          <Card className='my-3'>
            <Card.Body>
              <Card.Text>
                <h5>Course Name : {course.name}</h5>
                Course Description : <p>{course.description}</p>
                <p>Course ID : {course.id}</p>
              </Card.Text>
              <Row>
                <Col md={1}>
                  <Button onClick={() => editCourse(course.id)}>Edit</Button>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      deleteCourse(course.id)
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default Course
