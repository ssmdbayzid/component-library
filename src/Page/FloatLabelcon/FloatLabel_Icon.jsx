import React, {useState} from 'react'

import { FloatLabel } from 'primereact/floatlabel'
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci";
import { ImSpinner8 } from "react-icons/im";

const FloatLabel_Icon = () => {
  return (
    <div className='flex gap-3'>
      <div className="">        
        <Label />
        </div>
      <div className="">        
        <IconFieldCom />
        </div>
    </div>
  )
}

export default FloatLabel_Icon

const Label = ()=>{
  const [value, setValue] = useState('');

    return (
      <div className="">
        <div className="card flex justify-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label for="username">Username</label>
            </FloatLabel>
        </div>

      </div>
    )
}


const IconFieldCom = ()=>{
  return (
    <div className="flex gap-3">
        <IconField iconPosition="left">
       <InputIcon> <CiSearch /></InputIcon>
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <IconField>
        <InputIcon> <ImSpinner8 /></InputIcon>
            <InputText v-model="value2" />
        </IconField>
    </div>
)
}