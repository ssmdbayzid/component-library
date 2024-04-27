import React from 'react'
import ButtonCom from './ButtonCom'
import AccordionCom from './AccordionCom'
import AlerrCom from './AlerrCom'
import { Modal } from './Modal'
import { AvatarCom } from './AvatarCom'
import { BadgeCom } from './BadgeCom'

const ShadCn = () => {
  return (
    <div className='max-w-[1170px] mx-auto'>
       <h3>Shad CN</h3> 
       {/* <div className="grid grid-cols-3 gap-3 w-full bg-blue-400"> */}
       <div className="flex grid-cols-3 gap-3 w-full bg-blue-200">
       <div className="w-full">
        <ButtonCom />
        </div>
        <div className="w-full">
        <AccordionCom />
        </div>
        <div className="w-full">
        <AlerrCom />
        </div>
        <div className="w-full">
        <Modal />
        </div>
        <div className="w-full">
        <AvatarCom />
        </div>
        <div className="w-full">
        <BadgeCom />
        </div>
       </div>
        
    </div>
  )
}

export default ShadCn