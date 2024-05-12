import React, { useState } from "react";
import { InputText } from "primereact/inputtext";


const InputTextCom = () => {
  return (
    <div>
          <div className="">
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
          <div className="">
        <h2 className='mb-2 font-semibold'>Key Filter</h2>
        <KayType />
        </div>
       
    </div>
  )
}

export default InputTextCom

const Basic = ()=>{
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
const KayType = ()=>{
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}