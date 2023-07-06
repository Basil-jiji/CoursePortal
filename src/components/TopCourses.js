import React from 'react'
import { Card, Container } from 'react-bootstrap'

const TopCourses = ({courses}) => {
  return (
    <Container>
      <h3>{courses.name}</h3>
    </Container>
  )
}

export default TopCourses