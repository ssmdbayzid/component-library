import React, {useState} from 'react'

import { ColorPicker } from 'primereact/colorpicker';
        
const ColorPickerCom = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>    
        <div className="">
        <h2 className='mb-2 font-semibold'>Color Picker</h2>
        <Basic />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Inline Color</h2>
        <Inline />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Multi Formar Color</h2>
        <MultiColor />
        </div>
    </div>
  )
}

export default ColorPickerCom

const Basic = () =>{
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
        </div>
    )
}
const Inline = () =>{
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
        </div>
    )
}
const MultiColor = () =>{
    const [colorHEX, setColorHEX] = useState('6466f1');
    const [colorRGB, setColorRGB] = useState({ r: 100, g: 102, b: 241 });
    const [colorHSB, setColorHSB] = useState({ h: 239, s: 59, b: 95 });

    const formatRGB = (rgb) => `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    const formatHSB = (hsb) => `(${hsb.h}, ${hsb.s}, ${hsb.b})`;
    return (
        <div className="card flex justify-center gap-5">
            <div className="flex-1 flex flex-col align-items-center">
                <label htmlFor="cp-hex" className="font-bold block mb-2">
                    HEX
                </label>
                <ColorPicker inputId="cp-hex" format="hex" value={colorHEX} onChange={(e) => setColorHEX(e.value)} className="mb-3" />
                <span className='text-nowrap'>{colorHEX}</span>
            </div>
            <div className="flex-1 flex flex-col align-items-center">
                <label htmlFor="cp-rgb" className="font-bold block mb-2">
                    RGB
                </label>
                <ColorPicker  inputId="cp-rgb" format="rgb" value={colorRGB} onChange={(e) => setColorRGB(e.value)} className="mb-3" />
                <span className='text-nowrap'>{formatRGB(colorRGB)}</span>
            </div>
            <div className="flex-1 flex flex-col align-items-center">
                <label htmlFor="cp-hsb" className="font-bold block mb-2">
                    HSB
                </label>
                <ColorPicker inputId="cp-hsb" format="hsb" value={colorHSB} onChange={(e) => setColorHSB(e.value)} className="mb-3" />
                <span className='text-nowrap'>{formatHSB(colorHSB)}</span>
            </div>
        </div>
    )
}