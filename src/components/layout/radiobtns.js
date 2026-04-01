'use client'

import RadioBtn from "../ui/radiobtn";

export default function RadioBtns({ name = "text", options, title }) {

    return (
        <div className="mb-3">
            <h3 className="font-semibold mb-1.5">{title}</h3>
            <div className="grid grid-cols-3 gap-6">
                {options.map((option) => (
                    <RadioBtn key={option} label={option} name={name} value={option}/>
                ))}
            </div>
        </div>
    );
}