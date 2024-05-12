import React from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

import { LiaUserPlusSolid } from "react-icons/lia";
import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
const InputGroupCom = () => {
  return (
    <div className='grid grid-cols-2 gap-3'>
      <div className="">
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
      <div className="">
        <h2 className='mb-2 font-semibold'>Multiple</h2>
        <Multiple />
        </div>
      <div className="col-span-2">
        <h2 className='mb-2 font-semibold'>Button Demo</h2>
        <ButtonCom />
        </div>
    </div>
  )
}

export default InputGroupCom

const Basic = ()=>{
  return (
    <div className="card flex flex-column md:flex-row gap-3">
        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
               <LiaUserPlusSolid className='text-xl' />
            </span>
            <InputText placeholder="Username" />
        </div>

        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">$</span>
            <InputNumber placeholder="Price" />
            <span className="p-inputgroup-addon">.00</span>
        </div>

        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
        </div>
    </div>
)
}

const Multiple = ()=>{
  
  return(
    <div className="card flex justify-content-center">
    <div className="p-inputgroup w-full md:w-30rem">
        <span className="p-inputgroup-addon">
           <CiClock2 />
        </span>
        <span className="p-inputgroup-addon">
            <FaStar />
        </span>
        <InputNumber placeholder="Price" />
        <span className="p-inputgroup-addon">$</span>
        <span className="p-inputgroup-addon">.00</span>
    </div>
</div>
  )
}

const ButtonCom = ()=>{
  return (
    <div className="card flex flex-column md:flex-row gap-3">
    <div className="p-inputgroup flex-1">
        <Button label="Search" />
        <InputText placeholder="Keyword" />
    </div>

    <div className="p-inputgroup flex-1">
        <InputText placeholder="Keyword" />
        <Button className="p-button-warning">
        <IoSearch className='text-white text-xl' />
        </Button>
    </div>

    <div className="p-inputgroup flex-1">
        <Button className="p-button-success" >
        <FaCheck className='text-white text-xl' />
        </Button>

        <InputText placeholder="Vote" />
        
        <Button  className="p-button-danger">
        <RxCross1 className='text-white text-xl' />
        </Button>
    </div>
</div>
  )
   
}