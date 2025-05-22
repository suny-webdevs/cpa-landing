/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { TDecodedData } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const getToken = async (cookieName: string) => {
  const cookieStore = await cookies();
  const cookieData = cookieStore.get(cookieName)!.value;
  return cookieData;
};

export const removeToken = async (cookieName: string) => {
  const cookieStore = await cookies();
  const cookieData = cookieStore.delete(cookieName);
  return cookieData;
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    const result = await res.json();

    if (result.success) {
      (await cookies()).set("token", result?.data?.token);
    }
    return result;
  } catch (error: any) {
    throw Error(error);
  }
};

export const getUserData = async (email: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/user/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${await getToken("token")}`,
        },
        credentials: "include",
      },
    );

    const result = await res.json();

    if (result.success) {
      return result;
    }

    return null;
  } catch (error: any) {
    throw Error(error);
  }
};

export const getCurrentUser = async () => {
  const token = await getToken("token");
  let decodedData: TDecodedData = null;

  if (token) {
    decodedData = await jwtDecode(token);
    const userData = await getUserData(decodedData?.email as string);
    if (userData?.data?.role === "Admin") {
      return userData;
    } else {
      toast.error("Unauthorized access!");
      redirect("/");
    }
  } else {
    redirect("/");
  }
};
