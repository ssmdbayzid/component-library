import { Fragment, useState } from 'react'
import { Listbox,  Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { FaCheck } from "react-icons/fa6";


const fruits = ["Apple", "Orange", "Grape", "Lemon", "Blueberry"]


const ListBox = () => {
    const [selectedFruit, setSelectedFruit] = useState("Apple")

    return (
    <div className='flex items-center justify-center min-w-96 '>
        <div className="w-full max-w-xs mx-auto ">
        <Listbox as="div"  value={selectedFruit} onChange={setSelectedFruit}>
            {({open})=>(
                <>
                <Listbox.Label className="text-lg font-medium text-gray-300 ">Favorite Fruit</Listbox.Label>
                <div className="relative ">
                    <span className='inline-block w-full'>
                    <Listbox.Button className="pl-3 bg-white rounded-md py-2 w-full text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 relative border shadow">
                    <span className='block truncate'>{selectedFruit}</span>
                    </Listbox.Button>
                    </span>
                    <Transition 
                    show={open}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >                   
                    <Listbox.Options static className="border bg-white border-gray-300 rounded mt-1">
                        {fruits.map(fruit=>
                        <Listbox.Option
                        key={fruit} value={fruit}
                        >
                    {({selected, active})=>(
                        <div className={`${ (selected || active) ? "text-white bg-indigo-600" : "text-gray-900"} cursor-pointer select-none relative py-2 ps-10 pr-4`}>
                            <span className={`${selected ? "font-semibold" : "font-normal"}`}>{fruit}</span>

                            {selected && (
                                <span className={`${selected ? "text-white" : "text-indigo-600"} absolute inset-y-0 left-0 flex items-center pl-2`}>                                    
                                    <FaCheck/>
                                </span>
                            )}
                        </div>
                    )}
                        </Listbox.Option>)}
                    </Listbox.Options>
                    </Transition>
                </div>
                </>
            )}
        </Listbox>
        </div>
    </div>
  )
}

export default ListBox