import React from 'react';

export const KonturButton = ({
  use = 'default',
  size = 'medium',
  children = 'Контур Действие',
  disabled = false,
  loading = false,
  onClick,
}) => {
  const baseStyle = {
    fontFamily: '"Lab Grotesque", -apple-system, "Segoe UI", Roboto, sans-serif',
    fontWeight: 400,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    borderRadius: '2px',
    transition: 'all 0.1s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const sizeStyles = {
    small: { padding: '5px 10px', fontSize: '12px', height: '28px' },
    medium: { padding: '8px 16px', fontSize: '14px', height: '34px' },
    large: { padding: '10px 20px', fontSize: '16px', height: '44px' },
  };

  const useStyles = {
    default: {
      backgroundColor: disabled ? '#f2f2f2' : '#ffffff',
      border: '1px solid #d4d4d4',
      color: disabled ? '#a0a0a0' : '#222222',
      boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
    },
    primary: {
      backgroundColor: disabled ? '#d4d4d4' : '#1e88e5',
      border: '1px solid transparent',
      color: '#ffffff',
    },
    success: {
      backgroundColor: disabled ? '#d4d4d4' : '#2e7d32',
      border: '1px solid transparent',
      color: '#ffffff',
    },
    danger: {
      backgroundColor: disabled ? '#d4d4d4' : '#d32f2f',
      border: '1px solid transparent',
      color: '#ffffff',
    },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...useStyles[use],
      }}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? 'Загрузка...' : children}
    </button>
  );
};

export default {
  title: 'Design Systems/Контур (React UI)/Button',
  component: KonturButton,
  argTypes: {
    use: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    use: 'default',
    size: 'medium',
    children: 'Отменить',
  },
};

export const Primary = {
  args: {
    use: 'primary',
    size: 'medium',
    children: 'Сохранить изменения',
  },
};

export const Success = {
  args: {
    use: 'success',
    size: 'medium',
    children: 'Подписать и отправить',
  },
};

export const Danger = {
  args: {
    use: 'danger',
    size: 'medium',
    children: 'Удалить документ',
  },
};
