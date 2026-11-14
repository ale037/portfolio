import React from 'react';

export const TinkoffButton = ({
  appearance = 'primary',
  size = 'm',
  children = 'Перевести деньги',
  disabled = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"Tinkoff Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: 500,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '8px',
    transition: 'all 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  const sizeStyles = {
    s: { padding: '6px 12px', fontSize: '13px', height: '32px' },
    m: { padding: '10px 20px', fontSize: '15px', height: '44px' },
    l: { padding: '14px 28px', fontSize: '17px', height: '56px' },
  };

  const appearanceStyles = {
    primary: {
      backgroundColor: disabled ? '#e6e8eb' : '#ffdd2d',
      color: disabled ? '#959ba4' : '#333333',
    },
    secondary: {
      backgroundColor: disabled ? '#e6e8eb' : '#f5f6f7',
      color: disabled ? '#959ba4' : '#333333',
    },
    flat: {
      backgroundColor: disabled ? '#e6e8eb' : '#333333',
      color: disabled ? '#959ba4' : '#ffffff',
    },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...appearanceStyles[appearance],
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default {
  title: 'Design Systems/Тинькофф (Taiga UI)/Button',
  component: TinkoffButton,
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'flat'],
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const YellowPrimary = {
  args: {
    appearance: 'primary',
    size: 'm',
    children: 'Оплатить',
  },
};

export const Secondary = {
  args: {
    appearance: 'secondary',
    size: 'm',
    children: 'Пополнить баланс',
  },
};

export const DarkFlat = {
  args: {
    appearance: 'flat',
    size: 'm',
    children: 'Открыть счёт',
  },
};
