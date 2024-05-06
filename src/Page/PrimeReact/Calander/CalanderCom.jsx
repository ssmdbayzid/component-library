
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';


const CalanderCom = () => {
  return (
    <div className="">
        <h2>Calander</h2>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">  
        <div className="">
        <Calander1 />
        </div>
        <div className="">

        <Calander2 />
        </div>
        <div className="">

        <Calander3 />
        </div>
        <div className="">

        <Calander4 />
        </div>
        <div className="">

        <Calander5 />
        </div>
        <div className="">
        <h3>Multiple Dates</h3>
        <Calander6 />
        </div>
        <div className="">
        <h3>Range Dates</h3>
        <Calander7 />
        </div>
        <div className="">
        <h3>Dates with Show Button Bar</h3>
        <Calander8 />
        </div>
        <div className="">
        <h3>Time with different format</h3>
        <CalanderWithTime />
        </div>
        <div className="">
        <h3>Month Picker</h3>
        <MonthPicker />
        </div>
        <div className="">
        <h3>Multiple Month's</h3>
        <MultipleMonth />
        </div>
        <div className="">
        <h3>Year Picker</h3>
        <YearPicker />
        </div>
        <div className="">
        <h3>Date Templates</h3>
        <DateTemplates />
        </div>
    </div>
    </div>
  )
}

export default CalanderCom

const Calander1 = ()=>{
    const [date, setDate] = useState(null);
    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd-mm-yy" />
        </div>
    )
}

const Calander2 = () =>{
    const [date, setDate] = useState(null);
return (
    <div className="card flex justify-content-center">
    <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd-mm-yy" />
</div>
)
}
const Calander3 = () =>{
    const [date, setDate] = useState(null);
    
return (
    <div className="card flex justify-content-center">
    <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd-mm-yy" locate="bn" />
</div>
)
}

const Calander4 = () =>{
    const [date, setDate] = useState(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Button Display
                </label>
                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Display
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon  />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Template
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
            </div>
        </div>
    )
}

const Calander5= () =>{
    
        let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    const [date, setDate] = useState(null);

    let minDate = new Date();

    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();

    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput />
        </div>
    )
    
}
const Calander6 = () =>{
    const [dates, setDates] = useState(null);
    console.log(dates)
    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        </div>
    )
}

const Calander7 = () =>{
    const [dates, setDates] = useState(null);

    return (
        <div className="card flex justify-content-center">
        <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
    </div>
    )
}

const Calander8 = () =>{
    const [date, setDate] = useState(null)
    return (
        <div className="card flex justify-content-center">
        <Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar />
    </div>
    )
}

const CalanderWithTime = () =>{
    const [datetime12h, setDateTime12h] = useState(null);
    const [datetime24h, setDateTime24h] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    12h Format
                </label>
                <Calendar id="calendar-12h" value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                    24h Format
                </label>
                <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                    Time Only
                </label>
                <Calendar id="calendar-timeonly" value={time} onChange={(e) => setTime(e.value)} timeOnly hourFormat="12"  />
            </div>
        </div>
    )
}

const MonthPicker = ()=>{
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" />
        </div>
    )
}
const MultipleMonth = ()=>{
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} numberOfMonths={2} />
        </div>
    )
}
const YearPicker = ()=>{
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
        </div>
    )
}

const DateTemplates = ()=>{
    const [date, setDate] = useState(null);

    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }} >{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        </div>
    )
}