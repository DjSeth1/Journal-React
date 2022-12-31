import React from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path= '/' element= {<Home />} />
                <Route path= '/category/' element= {<CategorySelection />} />
                <Route path= '/entry/new' element= {<NewEntry />} />
                <Route path= '*' element = {<h4>Page not found!</h4>} /> 
            </Routes>
        </BrowserRouter>

    </>

  )
}

export default App