import React from 'react';
import type { LucideProps } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ComponentType<LucideProps>;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon: Icon,
  helperText,
  fullWidth,
  className = '',
  ...props
}) => {
  const inputWrapperClass = [
    'relative',
    fullWidth ? 'w-full' : '',
    className
  ].join(' ');

  const inputClass = [
    'block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
    Icon ? 'pl-10' : '',
    error ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : '',
    fullWidth ? 'w-full' : '',
  ].join(' ');

  return (
    <div className={inputWrapperClass}>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="text-gray-400" size={20} />
          </div>
        )}
        <input className={inputClass} {...props} />
      </div>
      {(helperText || error) && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};