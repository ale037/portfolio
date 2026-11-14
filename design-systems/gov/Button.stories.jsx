import React from 'react';

export const GovButton = ({
  variant = 'primary',
  size = 'medium',
  children = 'Подать заявление',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"Arial", "Helvetica", sans-serif',
    fontWeight: 700,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.02em',
  };

  const sizeStyles = {
    small: { padding: '8px 16px', fontSize: '13px', height: '36px' },
    medium: { padding: '12px 24px', fontSize: '15px', height: '46px' },
    large: { padding: '16px 32px', fontSize: '16px', height: '54px' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#cfd5dc' : '#0072db',
      color: disabled ? '#7c8793' : '#ffffff',
    },
    secondary: {
      backgroundColor: disabled ? '#eef1f4' : '#e6f1fc',
      color: disabled ? '#7c8793' : '#0072db',
    },
    success: {
      backgroundColor: disabled ? '#cfd5dc' : '#00965e',
      color: disabled ? '#7c8793' : '#ffffff',
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
  title: 'Design Systems/Госуслуги (Gov Design)/Button',
  component: GovButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success'],
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
    children: 'Получить услугу',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Назад к списку',
  },
};

export const Success = {
  args: {
    variant: 'success',
    size: 'medium',
    children: 'Подтвердить данные',
  },
};
