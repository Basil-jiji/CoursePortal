import React from 'react'
import { Container, Col, Row, Button, Dropdown } from 'react-bootstrap'
import '../styles/course-page.css'

const CoursePage = () => {
  return (
    <>
      <h3 className='text-center py-3 px-3'>Course Page</h3>
      <Container>
        <Row>
          <Col>
            <Button className=''>Add New Course</Button>
          </Col>
          <Col>
            <Button className=''>Edit Course</Button>
          </Col>
          <Col className=''>
            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>All</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>5 Stars</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>4 Stars</Dropdown.Item>
                <Dropdown.Item href='#/action-4'>3 Stars</Dropdown.Item>
                <Dropdown.Item href='#/action-5'>2 Stars</Dropdown.Item>
                <Dropdown.Item href='#/action-6'>1 Stars</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CoursePage
