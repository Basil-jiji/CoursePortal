import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const EditCourse = ({ editCourse, task }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    editCourse(value, task.id)

    setValue('')
  }
  return (
    <Container>
      <Form className='form' onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control
              type='text'
              className='input'
              placeholder='Update Course'
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </Col>
          <Col>
            <Button type='submit' className='btn'>
              Update Course
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default EditCourse
