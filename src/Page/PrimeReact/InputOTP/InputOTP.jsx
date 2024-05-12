import React, { useState } from 'react';
// import { InputOtp } from 'primereact/inputotp';

const InputOTP = () => {
  return (
    <div>
         <div className="">
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
    </div>
  )
}

export default InputOTP

const Basic = ()=>{
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            {/* <InputOtp value={token} onChange={(e) => setTokens(e.value)}/> */}
        </div>
    );
}