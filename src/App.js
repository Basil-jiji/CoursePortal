import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CoursePage from './components/CoursePage'
import AboutPage from './components/AboutPage'
import Banner from './components/Banner'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/course' element={<CoursePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
