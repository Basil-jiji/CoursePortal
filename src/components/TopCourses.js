import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../styles/top-courses.css'
import courses from '../courses'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const TopCourses = () => {

  const newcoursedata = [...courses].sort((a, b) => b.rating - a.rating)
  const topTwoData = newcoursedata.slice(0, 2)
  return (
    <Container>
      <Row>
      <h2 className='text-center py-3 px-3'>Top courses</h2>
      {topTwoData.map((top) => (
          <Col key={top.id}>
            <Card className='topcourse-card'>
              <Card.Body>
                <Card.Title className='text-center'>{top.name}</Card.Title>
                {top.description}
                <Col className='py-1'>
                  <Rating value={top.rating} />
                </Col>
                <Col><Link to='#'>Read More</Link></Col>
              </Card.Body>
            </Card>
          </Col>
      ))}
      </Row>
    </Container>
  )
}

export default TopCourses
