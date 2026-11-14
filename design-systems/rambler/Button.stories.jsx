import React from 'react';

export const RamblerButton = ({
  type = 'primary',
  size = 'medium',
  rounded = false,
  children = 'Кнопка Рамблер',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 500,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: rounded ? '100px' : '4px',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  const sizeStyles = {
    small: { padding: '7px 15px', fontSize: '13px', height: '35px' },
    medium: { padding: '11px 25px', fontSize: '15px', height: '45px' },
    large: { padding: '15px 35px', fontSize: '17px', height: '55px' },
  };

  const typeStyles = {
    primary: {
      backgroundColor: disabled ? '#e6e6e6' : '#315efb',
      color: disabled ? '#999999' : '#ffffff',
      boxShadow: disabled ? 'none' : '0 2px 8px rgba(49, 94, 251, 0.25)',
    },
    secondary: {
      backgroundColor: disabled ? '#f5f5f5' : '#eef2ff',
      color: disabled ? '#999999' : '#315efb',
    },
    outline: {
      backgroundColor: 'transparent',
      border: disabled ? '1px solid #d9d9d9' : '1px solid #315efb',
      color: disabled ? '#999999' : '#315efb',
    },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...typeStyles[type],
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default {
  title: 'Design Systems/Rambler UI/Button',
  component: RamblerButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    type: 'primary',
    size: 'medium',
    rounded: false,
    children: 'Читать новости',
  },
};

export const Rounded = {
  args: {
    type: 'primary',
    size: 'medium',
    rounded: true,
    children: 'Подписаться',
  },
};

export const Outline = {
  args: {
    type: 'outline',
    size: 'medium',
    rounded: false,
    children: 'Смотреть все',
  },
};
