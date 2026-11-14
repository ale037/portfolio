import React from 'react';

export const AcronisButton = ({
  variant = 'primary',
  size = 'medium',
  children = 'Запустить бэкап',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"Acronis", Arial, sans-serif',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  const sizeStyles = {
    small: { padding: '6px 14px', fontSize: '12px', height: '32px' },
    medium: { padding: '10px 20px', fontSize: '14px', height: '40px' },
    large: { padding: '14px 28px', fontSize: '16px', height: '48px' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#dbe2e8' : '#2060ff',
      color: disabled ? '#8a99a8' : '#ffffff',
    },
    dark: {
      backgroundColor: disabled ? '#dbe2e8' : '#002447',
      color: disabled ? '#8a99a8' : '#ffffff',
    },
    ghost: {
      backgroundColor: 'transparent',
      border: disabled ? '1px solid #dbe2e8' : '1px solid #2060ff',
      color: disabled ? '#8a99a8' : '#2060ff',
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
  title: 'Design Systems/Acronis/Button',
  component: AcronisButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'dark', 'ghost'],
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
    children: 'Создать резервную копию',
  },
};

export const DarkNavy = {
  args: {
    variant: 'dark',
    size: 'medium',
    children: 'Панель безопасности',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    size: 'medium',
    children: 'Настройки агента',
  },
};
