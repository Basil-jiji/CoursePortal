import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CoursePage from './components/CoursePage'
import AboutPage from './components/AboutPage'
import CourseWrapper from './components/Admin/CourseWrapper'
import ShowCourse from './components/ShowCourse'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className=''>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/course' element={<CoursePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/course/:id' element={<ShowCourse />} />
          <Route path='/admin' element={<CourseWrapper />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
