import Cookies from "js-cookie";

export const setCookie = (token: string) => {
  Cookies.set("token", token, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: 1,
  });
};
