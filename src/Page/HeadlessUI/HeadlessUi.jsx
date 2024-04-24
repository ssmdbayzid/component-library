import React from 'react'
import Dropdown from './Dropdown'
import ListBox from './ListBox'
import DisClosure from './DIsClosure'
import Modal from './Modal'
import PopOver from './PopOver'
import Radiogroup from './Radiogroup'
import Tabs from './Tabs'

const HeadlessUi = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-500 via-purple-500 to-purple-800  ">
      <div className="max-w-[1170px] mx-auto min-h-screen">
      <h2 className='text-center text-xl font-bold underline py-5 text-gray-200'>Headless UI Component</h2>
    <div className='grid md:grid-cols-3 gap-10 justify-center'>
      <div className="">        
        <Dropdown />
      </div>
      <div className="">        
        <ListBox />
      </div>
      <div className="">        
        <DisClosure />
      </div>
      <div className="">        
        <Modal />
      </div>
      <div className="">        
        <PopOver />
      </div>
      <div className="">        
        <Radiogroup />
      </div>
      <div className="">        
        <Tabs />
      </div>
    </div>
    </div>
    </div>
  )
}

export default HeadlessUi