import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Course = ({ task, deleteCourse, editCourse }) => {
  return (
    <>
      <Container>
        <div className=''>
          <Card className='my-3'>
            <Card.Body>
              <Card.Text>
                <h5>{task.name}</h5>
                <p>{task.description}</p>
                <p>{task.id}</p>
              </Card.Text>
              <Row>
                <Col md={1}>
                  <Button onClick={() => editCourse(task.id)}>Edit</Button>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      deleteCourse(task.id)
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
