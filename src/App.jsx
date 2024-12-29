import React from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import Home from './components/Home'
import InquiryForm from './components/Inquiryform'
import './App.css'


const App = () => {
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>welcome to E-commerce Website</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/inquiry">Product Inquiry</Link></li>

            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/'
          element={<Home/>}/>
          <Route path='/inquiry'
          element={<InquiryForm/>}/> 
        </Routes>
      </div>
    </Router>
  )
}

export default App