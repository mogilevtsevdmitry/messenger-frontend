"use client";

import Link from "next/link";

import { IconBtn } from "@/shared/ui/icon";

export const Form = () => {
  return (
    <div className="flex flex-col items-center border-r-8 p-20">
      <h2 className="text-center text-2xl text-white">Регистрация</h2>
      <form>
        <div className="form-control w-full max-w-xl">
          <label className="label" htmlFor="name">
            <span className="label-text">Имя</span>
          </label>
          <input type="text" id="name" placeholder="Иван" className="input-bordered input w-full" />
          <label className="label" htmlFor="email">
            <span className="label-text">E-mail</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="user@gmail.com"
            className="input-bordered input w-full"
          />
          <label className="label" htmlFor="password">
            <span className="label-text">Пароль</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Введите пароль"
            className="input-bordered input w-full"
          />
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
