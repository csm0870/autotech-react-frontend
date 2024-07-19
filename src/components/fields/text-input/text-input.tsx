import { useState } from "react";
import './text-input.css';

type TextInputProps = {
    defaultValue?: string;
    placeholder?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

export const TextInput = ({ defaultValue, placeholder, error, onChange, required, disabled }: TextInputProps) => {

    const [value, setValue] = useState(defaultValue ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if(onChange !== undefined) onChange(e.target.value);
    };

    return (
        <>
            <input
                className="text-input"
                type="text" value={value}
                placeholder={required ? `*${placeholder}` : placeholder}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                required={required}
                disabled={disabled}
            />
            {
                error !== undefined && (
                    <div className="control-error">
                        {error}
                    </div>
                )
            }
        </>
    );
};