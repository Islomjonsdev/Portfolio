import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import About from '../About/About'
import Auth from '../Auth/Auth'
import Blog from '../Blog/Blog'
import Home from '../Home/Home'
import Resume from '../Resume/Resume'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            {/* <Route path='/' element={<Auth />}/> */}
            <Route path='/' element={<Layout />}>
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/resume' element={<Resume />}/>
            </Route>
        </Routes>
    </div>
  )
}

export default RouterPage