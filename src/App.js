import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CoursePage from './components/CoursePage'
import AboutPage from './components/AboutPage'
import AddCourse from './components/AddCourse'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className=''>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/course' element={<CoursePage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/test' element={<AddCourse />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
