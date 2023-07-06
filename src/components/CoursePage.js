import React from 'react'
import {
  Container,
  Col,
  Row,
  Button,
  Dropdown,
  Card,
  Nav,
  NavDropdown,
  Tab,
} from 'react-bootstrap'
import '../styles/course-page.css'
import courses from '../courses'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import AddCourse from './AddCourse'
import EditCourse from './EditCourse'
import FilterCourse from './FilterCourse'

const CoursePage = () => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`)
  return (
    <>
      <h3 className='text-center py-3 px-3'>Course Page</h3>
      {/* <Container>
        <Row className='py-3'>
          <Col className='' sm={6}>
            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Filter
              </Dropdown.Toggle>
            </Dropdown>
          </Col>
          <Col sm={3} className='align-items-right'>
            <Link to='/add'>
              <Button variant='link'>Add Course</Button>
            </Link>
          </Col>
          <Col sm={3}>
            <Button>Edit Course</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {courses.map((course) => (
              <Card key={course.id}>
                <Card.Title>{course.name}</Card.Title>
                <Card.Body>
                  <Card.Text>
                    {course.description}
                    <Rating value={course.rating} color='gold' />
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container> */}

      <Tab.Container defaultActiveKey='first'>
        <Nav variant='pills'>
          <Nav.Item>
            <Nav.Link eventKey='first'>Filter</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='second'>Add Course</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='third'>Edit Course</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey='first'>
            <FilterCourse />
          </Tab.Pane>
          <Tab.Pane eventKey='second'>
            <AddCourse />
          </Tab.Pane>
          <Tab.Pane eventKey='third'>
            <EditCourse />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  )
}

export default CoursePage
