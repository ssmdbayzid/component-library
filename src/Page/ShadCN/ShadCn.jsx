import React from 'react'
import ButtonCom from './ButtonCom'
import AccordionCom from './AccordionCom'
import AlerrCom from './AlerrCom'
import { Modal } from './Modal'
import { AvatarCom } from './AvatarCom'
import { BadgeCom } from './BadgeCom'
import BradCruomb from './BradCruomb'

const ShadCn = () => {
  return (
    <div className='max-w-[1170px] mx-auto'>
       <h3 className='text-center text-2xl  font-semibold py-5'>Shad CN</h3> 
       {/* <div className="grid  gap-3  bg-blue-400"> */}
       <div style={{display: "grid"}} className="grid grid-cols-4 gap-3 p-3  bg-blue-200">       
        <ButtonCom />               
        <AccordionCom />               
        <AlerrCom />                
        <Modal />                
        <AvatarCom />
        <BadgeCom />        
        <BradCruomb />
       </div>        
    </div>
  )
}

export default ShadCn