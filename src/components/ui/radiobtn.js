'use client'

export default function RadioBtn({ label, name, value }) {

    return (
        <label className="flex items-center gap-3 cursor-pointer group">
            <input
                type="radio"
                name={name}
                value={value}
                className="hidden"
            />

            {/* Custom circle */}
            <div className="w-5 h-5 shrink-0 border-2 border-gray-400 rounded-full flex items-center justify-center
                group-has-hover:bg-(--clr-primary-hover)
                group-has-checked:bg-(--clr-primary)
                group-has-checked:border-(--clr-primary)
                transition-all">
                <div className="w-2 h-2 bg-white shrink-0 rounded-full scale-0
                group-has-checked:scale-100 transition-all duration-200"/>
            </div>

            <span>{label}</span>
        </label>
    );
}