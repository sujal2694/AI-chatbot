import React from 'react'
import Slider from '../../components/Slider'
import PromptPage from '../../components/PromptPage'

const Content = () => {
  return (
    <div className=' w-screen flex items-start'>
      <Slider/>
      <PromptPage/>
    </div>
  )
}

export default Content
