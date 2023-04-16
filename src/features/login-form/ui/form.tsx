"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { IconBtn } from "@/shared/ui/icon";

interface IFormInputs {
  email: string;
  password: string;
}

export const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    void router.push("/");
  };

  return (
    <div className="flex flex-col items-center border-r-8 p-20">
      <h2 className="text-center text-2xl text-white">Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xl">
          <label className="label" htmlFor="email">
            <span className="label-text">E-mail</span>
          </label>
          <input
            {...register("email", {
              required: "Это обязательное поле!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный формат email!",
              },
            })}
            autoComplete="email"
            id="email"
            placeholder="user@gmail.com"
            className={`input-bordered input w-full ${errors.email && "input-error"}`}
          />
          {errors.email && (
            <span className="label-text mt-1 text-error">
              {errors.email?.message || "Это обязательное поле!"}
            </span>
          )}
          <label className="label" htmlFor="password">
            <span className="label-text">Пароль</span>
          </label>
          <input
            {...register("password", {
              required: true,
            })}
            autoComplete="current-password"
            type="password"
            id="password"
            placeholder="Введите пароль"
            className={`input-bordered input w-full ${errors.password && "input-error"}`}
          />
          {errors.password && (
            <span className="label-text mt-1 text-error">Это обязательное поле!</span>
          )}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button className="btn" type="submit">
            Войти
          </button>
          <Link href="/auth">Нет аккаунта? Зарегистрируйтесь</Link>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <IconBtn name="social/google" />
          <IconBtn name="social/vkontakte" />
        </div>
      </form>
    </div>
  );
};
