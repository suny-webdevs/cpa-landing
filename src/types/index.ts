export type TDecodedData = {
  id: string;
  email: string;
  role: string;
  iat?: Date;
  ext?: Date;
} | null;

export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
};

export type TButton = {
  id?: string;
  label: string;
  link: string;
};
