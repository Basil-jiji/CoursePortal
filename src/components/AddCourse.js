import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const AddCourse = () => {
  return (
    <>
      <Card className='bg-dark text-light w-50'>
        <Card.Title>Add New Course</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Course Name</Form.Label>
              <Form.Control type='text'></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Course Description</Form.Label>
              <Form.Control type='text'></Form.Control>
            </Form.Group>
            <Button className='my-3'>Add Course</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default AddCourse
