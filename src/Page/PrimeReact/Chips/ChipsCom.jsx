import React, { useState } from "react";
import { Chips } from "primereact/chips";
import { FloatLabel } from "primereact/floatlabel";
import { LiaUserPlusSolid } from "react-icons/lia";

const ChipsCom = () => {
  return (
<div className="grid grid-cols-4 gap-3">
        <div className="">
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Saparator</h2>
        <Saparator />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Template</h2>
        <Template />
        </div>
        <div className="">
        <h2 className='pb-5 font-semibold'>Template</h2>
        
        <FloatLabel1 className="pt-2" />
        </div>
</div>
  )
}

export default ChipsCom

const Basic = () =>{
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid ">
            <Chips value={value} onChange={(e) => setValue(e.value)}  />
        </div>
    )
}

const Saparator = () =>{
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid ">
            <Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
        </div>
    )
}
const Template = () =>{
    const [value, setValue] = useState([]);
    
    const customClips = item =>{
        return (
            <div className="flex items-center">
            <span>{item} - (active)</span>
            <LiaUserPlusSolid className="w-5 h-5 ml-1" />
        </div>
        )
    }
    return (
        <div className="card p-fluid ">
            <Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customClips} separator="," />
        </div>
    )
}

const FloatLabel1 = () =>{
    const [value, setValue] = useState([]);

    return (
        <FloatLabel >
            <Chips id="username" value={value} onChange={(e) => setValue(e.value)} separator="," />
            <label htmlFor="username" >Username</label>
        </FloatLabel>
    )
}