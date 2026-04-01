'use client'

import RadioBtn from "../ui/radiobtn";

export default function RadioBtns({ name = "text", options, title, required = true }) {

    return (
        <div className="mb-3">
            <h3 className="font-semibold mb-1.5">{title} {required === true && <span className="text-red-600 font-light">*</span>}</h3>
            <div className="grid grid-cols-3 gap-6">
                {options.map((option) => (
                    <RadioBtn key={option} label={option} name={name} value={option}/>
                ))}
            </div>
        </div>
    );
}