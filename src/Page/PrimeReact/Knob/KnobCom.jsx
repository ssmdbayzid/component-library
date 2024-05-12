import React, {useState} from 'react'
import { Knob } from 'primereact/knob';


const KnobCom = () => {
  return (
    <div>
         <div className="card flex justify-content-center">
            <Basic />
        </div>
    </div>
  )
}

export default KnobCom

const Basic = ()=>{
    const [value, setValue] = useState(0);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}