import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const CourseForm = ({ addCourse }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    addCourse(value)

    setValue('')
  }
  return (
    <>
      <Container>
        <Form className='' onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Row>
              <Form.Label>Add Course</Form.Label>
              <Col md={8}>
                <Form.Control
                  type='text'
                  className=''
                  placeholder='Add Course'
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </Col>
              <Col>
                <Button type='submit' className='btn'>
                  Add
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default CourseForm
