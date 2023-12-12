'use client';

import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string,
  label: string,
  type?: string,
  disabled?: boolean,
  formatPrice?: boolean,
  required?: boolean,
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
}

const Input: FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        "$"
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`
          peer
          w-full
          font-light
          border-2
          rounded-md
          outline:none
          transition
          p-4
          pt-6
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        className={`
          absolute
          top-5
          text-md
          transform
          duration-150
          -translate-y-3
          z-10
          origin-[0]
          ${formatPrice ? "left-9" : "left-4"}
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
