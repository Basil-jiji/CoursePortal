import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Course = ({ task, deleteCourse, editCourse }) => {
  return (
    <>
      <Container>
        <div className='course'>
          <p>{task.task}</p>
          <Row>
            <Col>
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
        </div>
      </Container>
    </>
  )
}

export default Course
