import React, { useMemo, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Modal,
  Nav,
  NavDropdown,
  Row,
  Form,
} from 'react-bootstrap'
import '../styles/filter-course.css'
import courses from '../courses'
import Rating from './Rating'

const FilterCourse = () => {
  const [course, setCourse] = useState(courses)
  const [rating, setRating] = useState()

  const handleSelect = (eventKey) => {
    setRating(eventKey)
  }

  function getFilteredList() {
    if (!rating) {
      return course
    }
    return course.filter((item) => item.rating.toString() === rating)
  }

  var filteredList = useMemo(getFilteredList, [rating, course])

  const [show, setShow] = useState(false)
  const [showadd, setShowAdd] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleCloseAdd = () => setShowAdd(false)
  const handleShowAdd = () => setShowAdd(true)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleNameChange = (e) => {
    setCourse({ ...course, name: e.target.value })
  }

  const handleDescriptionChange = (e) => {
    setCourse({ ...course, description: e.target.value })
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Nav onSelect={handleSelect} className='ms-0'>
              <NavDropdown title='Filter' className=''>
                <NavDropdown.Item eventKey=''>All</NavDropdown.Item>
                <NavDropdown.Item eventKey='5'>5 Start Rating</NavDropdown.Item>
                <NavDropdown.Item eventKey='4'>4 Start Rating</NavDropdown.Item>
                <NavDropdown.Item eventKey='3'>3 Start Rating</NavDropdown.Item>
                <NavDropdown.Item eventKey='2'>2 Start Rating</NavDropdown.Item>
                <NavDropdown.Item eventKey='1'>1 Start Rating</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col md={2} className='me-0 align-items-right'>
            <Button variant='primary' className='w-100' onClick={handleShowAdd}>
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
          </Col>
        </Row>
      </Container>
      {filteredList.map((value) => (
        <Container className='my-3'>
          <Card key={value.id} className='border-0 filter-card'>
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Row>
                <Col md={8}>
                  <Card.Text>
                    {value.description}
                    <Rating value={value.rating} color='gold' />
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </>
  )
}

export default FilterCourse
