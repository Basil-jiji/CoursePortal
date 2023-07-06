import React from 'react'
import { Dropdown } from 'react-bootstrap'

const FilterCourse = () => {
  return (
    <>
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
    </>
  )
}

export default FilterCourse
