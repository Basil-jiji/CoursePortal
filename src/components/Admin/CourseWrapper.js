import React, { useState } from 'react'
import courses from '../../courses'
import CourseForm from './CourseForm'
import Course from './Course'
import { v4 as uuidv4 } from 'uuid'
import EditCourse from './EditCourse'
uuidv4()

const CourseWrapper = () => {
  const [courses, setCourses] = useState([])

  const addCourse = (course) => {
    setCourses([...courses, { id: uuidv4(), task: course, isEditing: false }])
    console.log(courses)
  }

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id))
  }

  const editCourse = (id) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, isEditing: !course.isEditing } : course
      )
    )
  }

  const editTask = (task, id) => {
    setCourses(
      courses.map((course) =>
        course.id === id
          ? { ...course, task, isEditing: !course.isEditing }
          : course
      )
    )
  }
  return (
    <>
      <div>
        <h2 className='text-center'>Course List</h2>
        <CourseForm addCourse={addCourse} />
        {courses.map((course, index) =>
          course.isEditing ? (
            <EditCourse editCourse={editTask} task={course} />
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
