import type {
  LoginUserDto,
  RegisterUserDto,
} from "api/src/modules/auth/dto/auth.dto";
import httpClient from "@/utils/http-client";

export const UserApi = {
  async register(data: RegisterUserDto) {
    const repsonse = await httpClient({
      url: "/auth/register",
      method: "POST",
      data,
    });

    return repsonse.data;
  },

  async login(data: LoginUserDto) {
    const repsonse = await httpClient({
      url: "/auth/login",
      method: "POST",
      data,
    });

    return repsonse.data;
  },

  async getCurrentUser(accessToken: string) {
    const response = await httpClient({
      url: "/auth",
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  },

  async logout() {
    await httpClient({
      url: "/auth/logout",
      method: "GET",
    });
  },
};
