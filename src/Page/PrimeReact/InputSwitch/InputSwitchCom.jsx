import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";


const InputSwitchCom = () => {
  return (
    <div>
         <div className="">
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
    </div>
  )
}

export default InputSwitchCom;

const Basic = ()=>{
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)}  />
        </div>
    );
}