import axios from 'axios';
import { AuthModel, ResponseModel } from '@/models';

export const signIn = (email: string, password: string) => {
  return axios
    .post<ResponseModel<AuthModel>>(
      `${process.env.NEXT_PUBLIC_API_URL}/authentication/login`,
      {
        userName: email,
        password,
      }
    )
    .then((res) => res.data)
    .then((res) => {
      if (res.isError) {
        throw new Error(res.message ?? 'Unknown error');
      }

      return res.data;
    });
};

export const signUp = (info: Record<string, string>) => {
  return axios
    .post<ResponseModel>(
      `${process.env.NEXT_PUBLIC_API_URL}/authentication/register`,
      {
        name: info?.name,
        email: info?.email,
        password: info?.password,
        phone: info?.phone,
      }
    )
    .then((res) => res.data)
    .then((res) => {
      if (res.isError) {
        throw new Error(res.message ?? 'Unknown error');
      }

      return res.data;
    });
};

export const renewToken = (accessToken: string, refreshToken: string) => {
  return axios
    .post<ResponseModel<AuthModel>>(
      `${process.env.NEXT_PUBLIC_API_URL}/authentication/register`,
      {
        accessToken: accessToken,
        refreshToken: refreshToken,
      }
    )
    .then((res) => res.data)
    .then((res) => {
      if (res.isError) {
        throw new Error(res.message ?? 'Unknown error');
      }

      return res.data;
    });
};
