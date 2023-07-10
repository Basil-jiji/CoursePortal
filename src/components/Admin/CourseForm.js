import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const CourseForm = ({ addCourse, addDescription }) => {
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

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
            <Form.Label>Add Course</Form.Label>
            <Form.Control
              type='text'
              className='my-2'
              placeholder='Add Course'
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />

            <Button type='submit' className='btn'>
              Add
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default CourseForm
