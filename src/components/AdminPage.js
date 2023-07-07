import React, { useState } from 'react'
import AddCourse from './AddCourse'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import courses from '../courses'

const AdminPage = () => {
  const [course, setCourse] = useState(courses)
  const [showadd, setShowAdd] = useState(false)

  const handleCloseAdd = () => setShowAdd(false)
  const handleShowAdd = () => setShowAdd(true)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  return (
    <>
      <Container>
        <Col>
          <Row>
            <Button variant='primary' onClick={handleShowAdd}>
              Add Course
            </Button>
            <Modal show={showadd} onHide={handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>Add Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className='my-3'
                  variant='success'
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
                  Save
                </Button>
                <Button variant='danger' onClick={handleCloseAdd}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Col>
        {course.map((course) => (
          <div key={course.id}>
            {course.name}
            <Form>
              <Form.Control
                type='text'
                defaultValue={course.name} value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                type='text'
                defaultValue={course.description} value={name}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                onClick={() =>
                  setCourse([
                    ...course,
                    {
                     name: name,
                        description: name,
                    },
                  ])
                }
              >
                Update
              </Button>
            </Form>
            {/* <Button variant='primary' onClick={handleShowAdd}>
              Add Course
            </Button>
            <Modal show={showadd} onHide={handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>Add Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control
                      type='text'
                      key={course.id}
                      value={course.name}
                      //onChange={}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Course Description</Form.Label>
                    <Form.Control
                      type='text'
                      value={course.description}
                      //onChange={}
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className='my-3'
                  variant='success'
                  onClick={() =>
                    setCourse([
                      ...course,
                      {
                        name: name,
                        description: description,
                      },
                    ])
                  }
                >
                  Save
                </Button>
                <Button variant='danger' onClick={handleCloseAdd}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Button>Delete</Button> */}
          </div>
        ))}
      </Container>
    </>
  )
}

export default AdminPage
