import React from 'react';

export const AlfaButton = ({
  variant = 'primary',
  size = 'medium',
  children = 'Кнопка Альфа',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '12px',
    transition: 'all 0.2s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  const sizeStyles = {
    small: { padding: '8px 16px', fontSize: '14px', height: '36px' },
    medium: { padding: '12px 24px', fontSize: '16px', height: '48px' },
    large: { padding: '16px 32px', fontSize: '18px', height: '56px' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#f3f4f5' : '#ef3124',
      color: disabled ? '#8f959c' : '#ffffff',
    },
    secondary: {
      backgroundColor: disabled ? '#f3f4f5' : '#f2f3f5',
      color: disabled ? '#8f959c' : '#0b1f35',
    },
    outline: {
      backgroundColor: 'transparent',
      border: disabled ? '1px solid #d8dcde' : '1px solid #ef3124',
      color: disabled ? '#8f959c' : '#ef3124',
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
  title: 'Design Systems/Альфа-Банк/Button',
  component: AlfaButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
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
    children: 'Открыть счёт',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Подробнее',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    size: 'medium',
    children: 'Войти в банк',
  },
};
