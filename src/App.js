import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CoursePage from './components/CoursePage'
import AboutPage from './components/AboutPage'
import AdminPage from './components/AdminPage'
import CourseWrapper from './components/Admin/CourseWrapper'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className=''>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/course' element={<CoursePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/admin' element={<CourseWrapper />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
