import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

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
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Course Name</Form.Label>
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
