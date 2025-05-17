// utils/decodeToken.ts
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  email: string;
  name?: string;
  exp?: number;
  iat?: number;
};

export const decodeToken = (token: string): JwtPayload => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
  } catch (err) {
    console.error("Failed to decode token:", err);
    throw new Error("Invalid token");
  }
};
