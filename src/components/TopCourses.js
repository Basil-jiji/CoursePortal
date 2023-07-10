import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import courses from '../courses'
import Rating from './Rating'

const TopCourses = () => {
  //Sort and Slice

  const newcoursedata = [...courses].sort((a, b) => b.rating - a.rating)
  console.log(newcoursedata)
  const topTwoData = newcoursedata.slice(0, 2)
  console.log(topTwoData)
  return (
    <Container>
      <h2 className='text-center py-3 px-3'>Top courses</h2>
      {topTwoData.map((top) => (
        <Row>
          <Col md={5} className='py-2'>
            <Card>
              <Card.Body>
                <Card.Title>{top.name}</Card.Title>
                {top.description}

                <Col>
                  <Rating value={top.rating} />
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default TopCourses
