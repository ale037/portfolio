import React from 'react';

export const ParadigmButton = ({
  mode = 'primary',
  size = 'm',
  children = 'Написать письмо',
  stretched = false,
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", sans-serif',
    fontWeight: 500,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '8px',
    transition: 'background-color 0.15s ease, opacity 0.15s ease',
    display: stretched ? 'flex' : 'inline-flex',
    width: stretched ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  const sizeStyles = {
    s: { padding: '6px 12px', fontSize: '13px', height: '30px' },
    m: { padding: '8px 16px', fontSize: '15px', height: '36px' },
    l: { padding: '10px 20px', fontSize: '16px', height: '44px' },
  };

  const modeStyles = {
    primary: {
      backgroundColor: disabled ? '#e1e3e6' : '#005ff9',
      color: disabled ? '#9399a3' : '#ffffff',
    },
    secondary: {
      backgroundColor: disabled ? '#f2f3f5' : '#005ff91f',
      color: disabled ? '#9399a3' : '#005ff9',
    },
    commerce: {
      backgroundColor: disabled ? '#e1e3e6' : '#2bbb58',
      color: disabled ? '#9399a3' : '#ffffff',
    },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...modeStyles[mode],
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default {
  title: 'Design Systems/Paradigm (Mail.ru & VK)/Button',
  component: ParadigmButton,
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'commerce'],
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
    },
    stretched: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    mode: 'primary',
    size: 'm',
    children: 'Отправить',
  },
};

export const Secondary = {
  args: {
    mode: 'secondary',
    size: 'm',
    children: 'Сохранить черновик',
  },
};

export const Commerce = {
  args: {
    mode: 'commerce',
    size: 'm',
    children: 'Оплатить VK Pay',
  },
};
