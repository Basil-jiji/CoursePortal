import React, { useMemo, useState } from 'react'
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap'
import courses from '../courses'

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

  return (
    <>
      <Nav onSelect={handleSelect}>
        <NavDropdown title='Filter'>
          <NavDropdown.Item eventKey=''>All</NavDropdown.Item>
          <NavDropdown.Item eventKey='5'>5 Start Rating</NavDropdown.Item>
          <NavDropdown.Item eventKey='4'>4 Start Rating</NavDropdown.Item>
          <NavDropdown.Item eventKey='3'>3 Start Rating</NavDropdown.Item>
          <NavDropdown.Item eventKey='2'>2 Start Rating</NavDropdown.Item>
          <NavDropdown.Item eventKey='1'>1 Start Rating</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {filteredList.map((value) => (
        <div key={value.id}>
          <h1>{value.name}</h1>
        </div>
      ))}
    </>
  )
}

export default FilterCourse
