import { Link } from '@remix-run/react';
import type { LucideProps } from 'lucide-react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ComponentType<LucideProps>;
  to?: string;
  fullWidth?: boolean;
}

const variantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  to,
  fullWidth,
  className = '',
  ...props
}) => {
  const baseStyles = [
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    className
  ].join(' ');

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {Icon && <Icon className="mr-2" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {Icon && <Icon className="mr-2" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      {children}
    </button>
  );
};