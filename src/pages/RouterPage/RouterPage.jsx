import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Auth from '../Auth/Auth'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Auth />}/>
            <Route path='/main' element={<Layout />}>

            </Route>
        </Routes>
    </div>
  )
}

export default RouterPage