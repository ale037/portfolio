import React from 'react';

export const MegafonButton = ({
  theme = 'green',
  size = 'medium',
  children = 'Подключить тариф',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"MegaFon", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  const sizeStyles = {
    small: { padding: '8px 16px', fontSize: '13px', height: '36px' },
    medium: { padding: '12px 24px', fontSize: '15px', height: '46px' },
    large: { padding: '16px 32px', fontSize: '17px', height: '56px' },
  };

  const themeStyles = {
    green: {
      backgroundColor: disabled ? '#e3e6e8' : '#00b956',
      color: disabled ? '#9ca5ac' : '#ffffff',
      boxShadow: disabled ? 'none' : '0 4px 12px rgba(0, 185, 86, 0.3)',
    },
    purple: {
      backgroundColor: disabled ? '#e3e6e8' : '#731982',
      color: disabled ? '#9ca5ac' : '#ffffff',
      boxShadow: disabled ? 'none' : '0 4px 12px rgba(115, 25, 130, 0.3)',
    },
    light: {
      backgroundColor: disabled ? '#e3e6e8' : '#f3f5f7',
      color: disabled ? '#9ca5ac' : '#333333',
    },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...themeStyles[theme],
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default {
  title: 'Design Systems/МегаФон UI/Button',
  component: MegafonButton,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['green', 'purple', 'light'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const GreenBrand = {
  args: {
    theme: 'green',
    size: 'medium',
    children: 'Выбрать тариф',
  },
};

export const PurpleAccent = {
  args: {
    theme: 'purple',
    size: 'medium',
    children: 'Купить eSIM',
  },
};

export const Light = {
  args: {
    theme: 'light',
    size: 'medium',
    children: 'Личный кабинет',
  },
};
