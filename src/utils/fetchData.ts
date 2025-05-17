import { ReactNode } from "react";

type fetchDataProps = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  token?: string;
  body?: ReactNode;
};

const fetchData = async ({
  url,
  method = "GET",
  token,
  body,
}: fetchDataProps) => {
  const res = await fetch(url, {
    method: method,
    headers: { "content-type": "application/json", Authorization: `${token}` },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return data?.data;
};

export default fetchData;
