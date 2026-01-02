import React from 'react'
import Navbar from '../../components/Navbar'
import LoginPage from '../../components/LoginPage'
import Content from '../Content/Content'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Content/>
      <LoginPage />
    </div>
  )
}

export default Home
