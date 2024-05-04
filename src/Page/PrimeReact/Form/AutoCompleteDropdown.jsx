import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import axios from "axios";

export default function AutoCompleteDropdown() {
   

    return (
        <div className="grid grid-cols-4 gap-5">
            <Dropdown />
            <Dropdown2 />
            <Dropdown3 />
        </div>
    )
}
        
const Dropdown = () =>{
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
    )
}

const Dropdown2 = ()=>{
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }
    return <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
            </div>
}

const Dropdown3 =  () =>{
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const search = (event) =>{
        // Timeout to emulate a network connection

        setTimeout(()=>{
            let _filteredCountries;
            if(!event.query.trim().length){
                _filteredCountries = [...countries];
            }else{
                _filteredCountries = countries.filter(country=>country.name.toLowerCase().startsWith(event.query.toLowerCase()));
            }
            setFilteredCountries(_filteredCountries)
        },250)
    }


    useEffect(()=>{
        axios.get("https://freetestapi.com/api/v1/countries")
        .then(response=>setCountries(response?.data))
        .catch(err=>console.log(err))
    },[])
   
    console.log(countries)
    return (<div className="card flex justify-content-center">
    <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} dropdown/>
</div>)
}
const DropdownWithFlag = () =>{
    const panelFooterTemplate =() =>{
        const isCountrySelected =(filteredCountries || []).some(country =>country['name'] === selectedCountry);
        return (
            <div className="py-2 px-3">
                {
                    isCountrySelected ? <span>
                        <b>{selectedCountry}</b> selected
                    </span>
                    : ("No country selected")
                }
            </div>
        )
    }

    const search = (event)=>{
        // Timeout to emulate a netwk
    }
    return(
<div className="">dsafasdf</div>
    )
}