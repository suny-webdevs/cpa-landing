"use server";

import { TButton } from "@/types";
import { getToken } from "../AuthService";

export const createButton = async (payload: TButton) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/buttons`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `${await getToken("token")}`,
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });

    const data = await res.json();

    if (data.success) {
      await getButtons();
      return data;
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const getButtons = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/buttons`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${await getToken("token")}`,
      },
      credentials: "include",
      next: {
        revalidate: 5,
      },
    });

    const data = await res.json();

    if (data.success) {
      return data;
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const updateButton = async (id: string, payload: Partial<TButton>) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/buttons/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `${await getToken("token")}`,
        },
        body: JSON.stringify(payload),
        credentials: "include",
      },
    );

    const data = await res.json();

    if (data.success) {
      await getButtons();
      return data;
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const deleteButton = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/buttons/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `${await getToken("token")}`,
        },
        credentials: "include",
      },
    );

    const data = await res.json();

    if (data.success) {
      await getButtons();
      return data;
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};
