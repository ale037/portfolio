import React from 'react';

export const BarsButton = ({
  variant = 'primary',
  size = 'medium',
  children = 'Действие BARS',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"Roboto", Arial, sans-serif',
    fontWeight: 500,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const sizeStyles = {
    small: { padding: '6px 12px', fontSize: '13px', height: '32px' },
    medium: { padding: '8px 16px', fontSize: '14px', height: '38px' },
    large: { padding: '10px 20px', fontSize: '15px', height: '44px' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#d6dbe0' : '#0066b3',
      color: disabled ? '#8b949e' : '#ffffff',
    },
    secondary: {
      backgroundColor: disabled ? '#f0f2f5' : '#e6f0f8',
      color: disabled ? '#8b949e' : '#0066b3',
    },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default {
  title: 'Design Systems/BARS Group/Button',
  component: BarsButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Сформировать отчёт',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Экспорт в Excel',
  },
};
