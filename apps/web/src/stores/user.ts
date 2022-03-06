import type { User } from "@prisma/client";
import { defineStore } from "pinia";

import type {
  LoginUserDto,
  RegisterUserDto,
} from "api/src/modules/auth/dto/auth.dto";
import { UserApi } from "@/apis/user";

const ACCESS_TOKEN_KEY = "access_token";

interface UserStore {
  user: Partial<User> | null
  accessToken: string
  isAuthenticated: boolean
}

export const useUserStore = defineStore("user", {
  state: (): UserStore => {
    return {
      user: null,
      accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) ?? "",
      isAuthenticated: false,
    };
  },
  getters: {},
  actions: {
    async login(data: LoginUserDto) {
      const { user, accessToken } = await UserApi.login(data);
      await localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      this.accessToken = accessToken;
      this.user = user;
      this.isAuthenticated = true;
    },
    async register(data: RegisterUserDto) {
      const { user, accessToken } = await UserApi.register(data);
      await localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      this.accessToken = accessToken;
      this.user = user;
      this.isAuthenticated = true;
    },
    async getCurrentUser() {
      const user = await UserApi.getCurrentUser(this.accessToken);
      this.user = user;
      this.isAuthenticated = true;
    },
    async logout() {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      await await UserApi.logout();
      this.user = null;
      this.accessToken = "";
      this.isAuthenticated = false;
    },
  },
});
