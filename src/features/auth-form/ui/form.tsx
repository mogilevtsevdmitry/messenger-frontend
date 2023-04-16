"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { IconBtn } from "@/shared/ui";

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

export const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    void router.push("/");
  };
  return (
    <div className="flex flex-col items-center border-r-8 p-20">
      <h2 className="text-center text-2xl text-white">Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xl">
          <label className="label" htmlFor="name">
            <span className="label-text">Имя</span>
          </label>
          <input
            {...register("name", {
              required: "Это обязательное поле!",
              minLength: {
                value: 2,
                message: "Минимальная длина 2 символа!",
              },
            })}
            autoComplete="username"
            type="text"
            id="name"
            placeholder="Иван"
            className={`input-bordered input w-full ${errors.name && "input-error"}`}
          />
          {errors.name && (
            <span className="label-text mt-1 text-error">
              {errors.name?.message || "Это обязательное поле!"}
            </span>
          )}
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
              required: "Это обязательное поле!",
            })}
            autoComplete="current-password"
            type="password"
            id="password"
            placeholder="Введите пароль"
            className="input-bordered input w-full"
          />
          {errors.password && (
            <span className="label-text mt-1 text-error">
              {errors.password?.message || "Это обязательное поле!"}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button className="btn" type="submit">
            Зарегистрироваться
          </button>
          <Link href="/login">Есть аккаунт? Войти</Link>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <IconBtn name="social/google" />
          <IconBtn name="social/vkontakte" />
        </div>
      </form>
    </div>
  );
};
