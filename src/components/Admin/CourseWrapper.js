import React, { useState } from 'react'
import courses from '../../courses'
import CourseForm from './CourseForm'
import Course from './Course'
import { v4 as uuidv4 } from 'uuid'
import EditCourse from './EditCourse'
uuidv4()

const CourseWrapper = () => {
  const [course, setCourses] = useState(courses)

  const addCourse = (name, description) => {
    setCourses([
      ...course,
      { id: uuidv4(), name: name, descritption: description, isEditing: false },
    ])
    console.log(course)
  }

  const deleteCourse = (id) => {
    setCourses(course.filter((course) => course.id !== id))
  }

  const editCourse = (id) => {
    setCourses(
      course.map((course) =>
        course.id === id ? { ...course, isEditing: !course.isEditing } : course
      )
    )
  }

  const editName = (name, id) => {
    setCourses(
      course.map((course) =>
        course.id === id
          ? { ...course, name, isEditing: !course.isEditing }
          : course
      )
    )
  }
  return (
    <>
      <div>
        <h2 className='text-center my-3'>Course List</h2>
        <CourseForm addCourse={addCourse} />
        {course.map((course, index) =>
          course.isEditing ? (
            <EditCourse editCourse={editName} task={course} />
          ) : (
            <Course
              task={course}
              key={index}
              deleteCourse={deleteCourse}
              editCourse={editCourse}
            />
          )
        )}
      </div>
    </>
  )
}

export default CourseWrapper
