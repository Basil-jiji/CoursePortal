import React from 'react'
import { Card, Container } from 'react-bootstrap'

const TopCourses = ({ courses }) => {

  //Sort and Slice

const data = [5,1,6,9,3];
const sort = data.sort((a, b) => b-a)
console.log(sort)
  return (
    <Container>
      <h3>{courses.name}</h3>
    </Container>
  )
}

export default TopCourses
