import React from 'react';

export const ChulakovButton = ({
  variant = 'primary',
  size = 'medium',
  children = 'Обсудить проект',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '100px',
    letterSpacing: '-0.01em',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const sizeStyles = {
    small: { padding: '8px 20px', fontSize: '13px', height: '36px' },
    medium: { padding: '12px 28px', fontSize: '15px', height: '48px' },
    large: { padding: '16px 36px', fontSize: '17px', height: '58px' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#e0e0e0' : '#111111',
      color: disabled ? '#999999' : '#ffffff',
      boxShadow: disabled ? 'none' : '0 4px 14px rgba(0, 0, 0, 0.15)',
    },
    accent: {
      backgroundColor: disabled ? '#e0e0e0' : '#ff4d00',
      color: disabled ? '#999999' : '#ffffff',
      boxShadow: disabled ? 'none' : '0 4px 14px rgba(255, 77, 0, 0.25)',
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
  title: 'Design Systems/Студия Чулакова/Button',
  component: ChulakovButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'accent'],
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
    children: 'Начать проект',
  },
};

export const Accent = {
  args: {
    variant: 'accent',
    size: 'medium',
    children: 'Посмотреть кейсы',
  },
};
