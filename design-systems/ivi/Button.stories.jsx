import React from 'react';

export const IviButton = ({
  variant = 'primary',
  size = 'medium',
  children = 'Смотреть фильм',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"iviSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '8px',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  const sizeStyles = {
    small: { padding: '8px 16px', fontSize: '13px', height: '36px' },
    medium: { padding: '12px 24px', fontSize: '15px', height: '48px' },
    large: { padding: '16px 32px', fontSize: '17px', height: '56px' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#3a3a44' : '#ea144c',
      color: disabled ? '#737380' : '#ffffff',
      boxShadow: disabled ? 'none' : '0 4px 20px rgba(234, 20, 76, 0.4)',
    },
    cinema: {
      backgroundColor: disabled ? '#272732' : 'rgba(255, 255, 255, 0.12)',
      color: disabled ? '#737380' : '#ffffff',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
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
  title: 'Design Systems/ivi/Button',
  component: IviButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'cinema'],
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
    children: 'Оформить подписку',
  },
};

export const CinemaDark = {
  args: {
    variant: 'cinema',
    size: 'medium',
    children: 'Трейлер фильма',
  },
};
