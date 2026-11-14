import React from 'react';

export const BemButton = ({
  theme = 'action',
  size = 'm',
  view = 'default',
  children = 'Найти в Яндексе',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"YS Text", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 500,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '8px',
    transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  const sizeStyles = {
    s: { padding: '6px 12px', fontSize: '13px', height: '32px' },
    m: { padding: '8px 18px', fontSize: '15px', height: '40px' },
    l: { padding: '12px 24px', fontSize: '16px', height: '48px' },
  };

  const themeStyles = {
    action: {
      backgroundColor: disabled ? '#f0f0f0' : '#fc0',
      color: disabled ? '#b2b2b2' : '#000000',
    },
    default: {
      backgroundColor: disabled ? '#f0f0f0' : 'rgba(0, 0, 0, 0.05)',
      color: disabled ? '#b2b2b2' : '#000000',
    },
    pseudo: {
      backgroundColor: 'transparent',
      border: disabled ? '1px solid #e5e5e5' : '1px solid rgba(0, 0, 0, 0.2)',
      color: disabled ? '#b2b2b2' : '#000000',
    },
  };

  return (
    <button
      className={`button button_theme_${theme} button_size_${size}`}
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
  title: 'Design Systems/Яндекс (Лего & БЭМ)/Button',
  component: BemButton,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['action', 'default', 'pseudo'],
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const ActionYellow = {
  args: {
    theme: 'action',
    size: 'm',
    children: 'Найти',
  },
};

export const DefaultGray = {
  args: {
    theme: 'default',
    size: 'm',
    children: 'Войти',
  },
};

export const PseudoBorder = {
  args: {
    theme: 'pseudo',
    size: 'm',
    children: 'Настройки',
  },
};
