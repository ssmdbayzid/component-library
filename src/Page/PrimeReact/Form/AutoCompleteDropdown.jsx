import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import axios from "axios";

export default function AutoCompleteDropdown() {
   

    return (
        <div className="grid grid-cols-4 gap-5">
            <Dropdown />
            <Dropdown2 />
            <Dropdown3 />
            <DropdownWithFlag />
            <GroupLabelDropdown />
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
       
    return (<div className="card flex justify-content-center">
    <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} dropdown/>
</div>)
}
const DropdownWithFlag = () =>{
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const panelFooterTemplate = () => {
        const isCountrySelected = (filteredCountries || []).some( country => country['name'] === selectedCountry );
           return (
            <div className="py-2 px-3">
                {isCountrySelected ? (
                    <span>
                        <b>{selectedCountry}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const itemTemplate = (item) => {
        
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src={item?.flag}                    
                    className={`flag  mr-2`}
                    style={{width: '18px'}}
                />
                <div>{item.name}</div>
            </div>
        );
    };

    useEffect(()=>{
        axios.get("https://freetestapi.com/api/v1/countries")
        .then(response=>setCountries(response?.data))
        .catch(err=>console.log(err))
    },[])

 return (
    <div className="card flex justify-content-center">
    <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} 
        completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} />
</div>
 )
}

const GroupLabelDropdown = () =>{
    const [selectedCity, setSelectedCity] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            thumble: "https://cdn.pixabay.com/photo/2016/10/30/17/39/germany-flag-1783774_1280.png",
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            thubmle: "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_1280.png",
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            thubmble:"https://cdn.pixabay.com/photo/2012/04/13/12/23/flag-32177_1280.png",
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const groupItemTemplate = (item) =>{
        return (
            <div className="flex items-center">
                <img src={item.thumble} alt="" />
            </div>
        )
    }

    const search = (event) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);

            if (filteredItems && filteredItems.length) {
                _filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        setFilteredCities(_filteredCities);
    }
    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={selectedCity} onChange={(e) => setSelectedCity(e.value)} suggestions={filteredCities} completeMethod={search}
                field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupItemTemplate} placeholder="Hint: type 'a'" />
        </div>
    )
}