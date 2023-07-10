import React from 'react'
import '../styles/home-page.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import TopCourses from './TopCourses'
import courses from '../courses'
import reviews from '../reviews'
import Banner from './Banner'
import Reviews from './Reviews'

const HomePage = () => {
  return (
    <>
      <Banner />
      
      <TopCourses />
      <Reviews />
    </>
  )
}

export default HomePage
