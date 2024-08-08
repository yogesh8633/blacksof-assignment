import React from 'react';
import { Controller } from 'react-hook-form';
import './InputField.css';

interface InputFieldProps {
  control: any;
  name: string;
  type: string;
  label: string;
  defaultValue?: string;
}

const InputField: React.FC<InputFieldProps> = ({ control, name, type, label, defaultValue = '' }) => {
  return (
    <div className="mb-6 md:mb-8 lg:mb-12 relative">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className="floating-input w-full py-2 md:py-3 border-b-2 border-gray-300 bg-transparent text-white placeholder-white focus:outline-none focus:border-white transition-colors"
            placeholder=" "
          />
        )}
      />
      <label htmlFor={name} className="floating-label absolute text-base md:text-xl text-white font-medium transition-all">
        {label}
      </label>
    </div>
  );
};

export default InputField;
