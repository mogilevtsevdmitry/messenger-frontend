import { HTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ className, error, register, ...props }: InputProps) => {
  return (
    <div>
      <label className="label" htmlFor="email">
        <span className="label-text">E-mail</span>
      </label>
      <input
        {...register}
        autoComplete="email"
        id="email"
        placeholder="user@gmail.com"
        className={`input-bordered input w-full ${error && "input-error"}`}
      />
      {error && (
        <span className="label-text mt-1 text-error">
          {error.message || "Это обязательное поле!"}
        </span>
      )}
    </div>
  );
};
