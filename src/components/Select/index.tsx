import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

// usando as propriedades do React para passar um 'template'
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
    <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value="" id={name} { ...rest}>
            <option value="" disabled hidden>Selecione uma opção</option>

            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.label}</option>
                // o key impede que ocorra um error no console.log passando uma propriedade que seja única
            })} 
        </select>
    </div>
    );
}

export default Select;