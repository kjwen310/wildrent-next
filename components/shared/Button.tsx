'use client';

import { FC, MouseEvent } from 'react';

interface ButtonProps {
  label: string,
  disabled?: boolean,
  outline?: boolean,
  small?: boolean,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void,
}


const Button: FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        relative
        rounded-lg
        transition
        hover:opacity-80
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      Icon
      {label}
    </button>
  );
}

export default Button;
