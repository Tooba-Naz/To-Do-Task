
import React from "react";

const varients = {
    LoginPage: 'items-center justify-center font-medium shadow appearance-none border  rounded-xl w-96 py-2 px-3 text-grey-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 h-14',
    taskPage: 'w-5 h-5 border border-slate-300 bg-slate-400 mt-1',
    Modal: 'p-2 pl-14 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400',
};
export function Input({ varient,checked, type, name, inputId, defaultValue, label, helperText, error, placeholder, value, onChange }) {
    return (
        <div>
            {label && <label className="block text-sm text-gray-600 font-bold mb-2">{label}</label>}
            {helperText && <label className="block text-sm text-gray-600">{helperText}</label>}
            <input
                checked={checked}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                id={inputId}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={`${varients[varient]}`} />
            <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>
    );
}