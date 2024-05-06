import React from 'react'
import AutoCompleteDropdown from './Form/AutoCompleteDropdown'
import TableFilter from "./Table/TableFilter"
import CardCom from './Card/CardCom'
import CalanderCom from './Calander/CalanderCom'

const PrimeReact = () => {
  return (
    <div className='max-w-[1170px] mx-auto p-2'>PrimeReact
      <div className="">
        <AutoCompleteDropdown />
      </div>
      <div className="my-5">
        <CalanderCom />
      </div>
      {/* <div className="">
        <TableFilter />
      </div> */}
    </div>
  )
}

export default PrimeReact