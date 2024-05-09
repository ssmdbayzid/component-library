import React, {useState} from 'react'
import { CascadeSelect } from 'primereact/cascadeselect';
import { FloatLabel } from 'primereact/floatlabel';
import { countriesData } from '@/assets/data1';
import { IoCompassOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const CascadeSelector = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
        <div className="">
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Loading State</h2>
        <Loading />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Templates</h2>
        <Templates />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Float Label</h2>
        <FloatLebel />
        </div>
    </div>
  )
}

export default CascadeSelector

const Basic = ()=>{
    const [selectedCity, setSelectedCity] = useState(null);

    return (
        <div className="card flex justify-content-center">
            {countriesData && <CascadeSelect value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={countriesData} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                className="w-full md:w-14rem" breakpoint="767px" placeholder="Select a City" style={{ minWidth: '14rem' }}  />}
        </div>
    )
}

const Loading = () =>{
    
    return(
        <div className="card flex justify-content-center">
            <CascadeSelect loading placeholder="Loading..." className="w-full md:w-14rem" breakpoint="767px" style={{ minWidth: '14rem' }} />
        </div>
    )
}

const Templates = () =>{
    const [selectedCity, setSelectedCity] = useState(null);

    const countryOptionTemplate = (option)=>{
        return (
            <div className="flex items-center gap-2">
                  <div className="flex align-items-center gap-2">
                {option.states && <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                className={`flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />}
                {option.cities && <CiLocationOn /> }
                {option.cname && <IoCompassOutline />}
                <span>{option.cname || option.name}</span>
            </div>
            </div>
        )
    }
    return(
        <div className="card flex justify-content-center">
        {countriesData &&  <CascadeSelect value={selectedCity} onChange={e => setSelectedCity(e.value)} options={countriesData} 
            optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} 
            className="w-full md:w-14rem" breakpoint="767px" placeholder="Select a City" itemTemplate={countryOptionTemplate} style={{ minWidth: '14rem' }} />}
    </div>
    )
}

const FloatLebel = () =>{
    const [selectedCity, setSelectedCity] = useState(null);

    return (
        <div className="card flex justify-content-center">
        <FloatLabel>
           {countriesData &&  <CascadeSelect inputId="cs-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={countriesData} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                className="w-full md:w-14rem" breakpoint="767px" style={{ minWidth: '14rem' }} />}
            <label htmlFor="cs-city">Select City</label>
        </FloatLabel>
    </div>
    ) 
}