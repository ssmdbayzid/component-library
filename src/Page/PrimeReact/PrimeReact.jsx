import React from 'react'
import AutoCompleteDropdown from './Form/AutoCompleteDropdown'
import TableFilter from "./Table/TableFilter"
import CardCom from './Card/CardCom'

const PrimeReact = () => {
  return (
    <div className='max-w-[1170px] mx-auto '>PrimeReact
      <div className="">
        <AutoCompleteDropdown />
      </div>
      <div className="my-5">
        <CardCom />
      </div>
      {/* <div className="">
        <TableFilter />
      </div> */}
    </div>
  )
}

export default PrimeReact