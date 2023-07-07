import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import courses from '../courses'

const AddCourse = () => {
  const [course, setCourse] = useState(courses)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <Card className='bg-dark text-light w-50'>
        <Card.Title>Add New Course</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              className='my-3'
              onClick={() =>
                setCourse([
                  ...course,
                  {
                    id: Math.floor(Math.random() * 100),
                    name: name,
                    description: description,
                    image: null,
                    featured: null,
                    rating: Math.floor(Math.random() * 5),
                  },
                ])
              }
            >
              Add Course
            </Button>
            {console.log(course)}
            {course.map((course) => (
              <div key={course.id}>{course.name}</div>
            ))}
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default AddCourse
