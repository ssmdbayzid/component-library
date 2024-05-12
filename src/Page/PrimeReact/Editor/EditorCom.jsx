import React, { useState } from "react";
import { Editor } from "primereact/editor";

const EditorCom = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
        <div >
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Templates</h2>
        <Template />
        </div>
    </div>
  )
}

export default EditorCom

const Basic = () =>{
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}

const Template = ()=>{
    const [text, setText] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
        </div>
    )
}