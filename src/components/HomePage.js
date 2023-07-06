import React from 'react'
import '../styles/home-page.css'
import { Col, Container, Image } from 'react-bootstrap'
import TopCourses from './TopCourses'
import courses from '../courses'
import Banner from './Banner'

const HomePage = () => {
  return (
    <>

    <Banner />
      <h2 className='text-center py-3 px-3'>Top courses</h2>
      {courses.map((course) => (
          <TopCourses courses={course}/>
      ))}
    </>
  )
}

export default HomePage