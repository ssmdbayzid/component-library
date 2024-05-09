import React, {useState, useRef} from 'react'
import { Dropdown } from 'primereact/dropdown'
import { FaChevronRight, FaChevronDown  } from "react-icons/fa6";
import { FloatLabel } from 'primereact/floatlabel';


const DropDown = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
        <div className="">
        <h2 className='mb-2 font-semibold'>Basic</h2>
        <Basic />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Check Mark</h2>
        <CheckMark />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Editable</h2>
        <Editable />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Group</h2>
        <Group />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Templates</h2>
        <Templates />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Filter Dropdown</h2>
        <Filter />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Clear Icon</h2>
        <ClearIcon />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Loading</h2>
        <Loading />
        </div>
        <div className="">
        <h2 className='mb-2 font-semibold'>Lazy Scroll</h2>
        <LazyScroll />
        </div>
        <div className="">
        {/* <h2 className='mb-2 font-semibold'>Float Label</h2> */}
        <FloatLabel2  className="mt-4"/>
        </div>
    </div>
  )
}

export default DropDown

const Basic = () =>{
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div className="card flex justify-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
const CheckMark = () =>{
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div className="card flex justify-center">
            <Dropdown checkmark={true} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
const Editable = () =>{
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div className="card flex justify-center">
            <Dropdown editable checkmark={true} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}

const Group = () =>{
    const [selectedCity, setSelectedCity] = useState(null);
    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
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
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const groupedItemTemplate = option =>{
        return(
            <div className="flex items-center">
            <img alt={option.label} src="https://cdn.pixabay.com/photo/2015/05/28/10/12/golf-787826_960_720.jpg" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
            <div>{option.label}</div>
        </div>
        )
    }

    return (
        <div className="card flex justify-center">
        <Dropdown checkmark={true} editable value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
            optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} className="w-full md:w-14rem" placeholder="Select a City" />
    </div>
    )
}

const Templates = ()=>{
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://cdn.pixabay.com/photo/2017/08/28/18/53/international-2690863_960_720.jpg" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };
    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://cdn.pixabay.com/photo/2017/08/28/18/53/international-2690863_960_720.jpg" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        return (
            <div className="py-2 px-3">
                {selectedCountry ? (
                    <span>
                        <b>{selectedCountry.name}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

return (
    <div className="card flex justify-center">
    <Dropdown checkmark={true} value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
        valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" panelFooterTemplate={panelFooterTemplate} 
        dropdownIcon={(opts) => {
            return opts.iconProps['data-pr-overlay-visible'] ? <FaChevronRight {...opts.iconProps} /> : <FaChevronDown {...opts.iconProps} />;
        }}/>
</div>    
)
}

const Filter = ()=>{
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Bangladesh', code: 'BD' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://cdn.pixabay.com/photo/2017/07/21/14/16/flag-2525861_960_720.jpg" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://cdn.pixabay.com/photo/2017/07/21/14/16/flag-2525861_960_720.jpg" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown checkmark={true} value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
        </div>   
    )

}

const ClearIcon = () =>{
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div className="card flex justify-center">
            <Dropdown showClear={true} checkmark={true} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}

const Loading = ()=>{
return (
    <Dropdown loading placeholder="Loading..." className="w-full md:w-14rem" />
  )
}


const LazyScroll = ()=>{

    const [selectedItem, setSelectedItem] = useState(null);
    const items = useRef(Array.from({ length: 100000 }));
    const [loading, setLoading] = useState(false);
    const loadLazyTimeout = useRef();

    const onLazyLoad = (event) => {
        setLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(
            () => {
                const { first, last } = event;
                const _items = [...items.current];

                for (let i = first; i < last; i++) {
                    _items[i] = { label: `Item #${i}`, value: i };
                }

                items.current = _items;
                setLoading(false);
            },
            Math.random() * 1000 + 250
        );
    };
return (
    <div className="card flex justify-content-center">
    <Dropdown
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.value)}
        options={items.current}
        placeholder="Select Item"
        className="w-full md:w-14rem"
        virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }}
    />
</div>
  )
}

const FloatLabel2 = () =>{
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-center">
            <FloatLabel className="w-full md:w-14rem">
                <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
                <label htmlFor="dd-city">Select a City</label>
            </FloatLabel>
        </div>
    )
}