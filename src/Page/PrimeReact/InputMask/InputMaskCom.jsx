import React, {useState} from 'react'
import { InputMask } from "primereact/inputmask";


const InputMaskCom = () => {
  return (
    <div className='grid grid-cols-3'>
      <div className="">
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
      <div className="">
        <h2 className='mb-2 font-semibold'>Mask</h2>
        <MaskCom />
        </div>
    </div>
  )
}

export default InputMaskCom

const Basic  = ()=>{
  const [value, setValue] = useState();

  return (
      <div className="card flex justify-content-center">
          <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
      </div>
  )
}

const MaskCom = ()=>{

  return(
  <div className="card p-fluid flex flex-wrap gap-3">
    <div className="flex w-full gap-3">
  <div className="flex-auto w-1/2">
      <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
      <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
  </div>

  <div className="flex-auto w-1/2">
      <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
      <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
  </div>
  </div>
  <div className="w-full">
      <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
      <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
  </div>
</div>
)
}