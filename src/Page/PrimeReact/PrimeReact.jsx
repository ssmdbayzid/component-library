import React, { useState } from 'react'
import AutoCompleteDropdown from './Form/AutoCompleteDropdown'
import TableFilter from "./Table/TableFilter"
import CardCom from './Card/CardCom'
import CalanderCom from './Calander/CalanderCom'
import { Accordion, AccordionTab } from 'primereact/accordion';
import CascadeSelector from './CascadeCom/CascadeSelector'
import CheckBoxCom from './CheckBox/CheckBoxCom'
import ChipsCom from './Chips/ChipsCom'
import ColorPickerCom from './ColorPicker/ColorPickerCom'
import DropDown from './Dropdown/DropDown'


const PrimeReact = () => {  
  const [tabs] = useState([
    {
      header: 'Auto Complete',
      children:  <div className="bg-indigo-100 p-4"><AutoCompleteDropdown /></div>
  },
  {
      header: 'Calander',
      children: <div className="bg-purple-100 p-4"><CalanderCom /></div>
  },
  {
      header: 'Cascade Select',
      children: <div className="bg-yellow-100 p-4"><CascadeSelector /></div>
  },
  {
      header: 'Check Box',
      children: <div className="bg-yellow-100 p-4"><CheckBoxCom /></div>
  },
  {
      header: 'Chips',
      children: <div className="bg-yellow-100 p-4"><ChipsCom /></div>
  },
  {
      header: 'Color Picker',
      children: <div className="bg-yellow-100 p-4"><ColorPickerCom /></div>
  },
  {
      header: 'Dropdown',
      children: <div className="bg-yellow-100 p-4"><DropDown /></div>
  },
  {
      header: 'Title III',
      children: <p className="m-0">Content 3 </p>
  }
  ])



  return (
    <div className='max-w-[1170px] mx-auto p-2 '>
      <h3 className='py-3 rounded-t-xl text-center bg-indigo-100 text-indigo-600 text-2xl'>Prime React Component Library</h3>
         <div className="card">
         <Accordion>
          {tabs && tabs.map((tab, i)=>
          <AccordionTab key={tab.header} header={tab.header}>
            {tab.children}
          </AccordionTab>
          )}
         </Accordion>
         </div>
    </div>
  )
}

export default PrimeReact