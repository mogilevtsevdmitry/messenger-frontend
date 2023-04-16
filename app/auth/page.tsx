import { NextPage } from "next";

import { AuthPage } from "@/pages/auth-page";

export const metadata = {
  title: "Messenger - Регистрация",
  description: "Зарегистрироваться в Messenger",
};

const Auth: NextPage = () => {
  return <AuthPage />;
};

export default Auth;
