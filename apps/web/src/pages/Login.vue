<script lang="ts" setup>
import type { LoginUserDto } from "api/src/modules/auth/dto/auth.dto";
import yaeMiko from "@/assets/images/YaeMiko.webp";

import { useUserStore } from "@/stores/user";

import router from "@/router";

const userStore = useUserStore();

const loginData: LoginUserDto = {
  email: "",
  password: "",
};

const handleLogin = async() => {
  await userStore.login(loginData);
  router.push("/");
};
</script>

<template>
  <div class="text-center h-screen grid place-items-center">
    <div class="max-w-2xl w-full p-6">
      <div class="aspect-[16/8] flex justify-center">
        <img class="h-full" :src="yaeMiko">
      </div>
      <form
        class="daisy-form-control w-full max-w-xl inline-block text-white"
        @submit.prevent="handleLogin"
      >
        <div>
          <label class="daisy-label">
            <span class="daisy-label-text">Email</span>
          </label>
          <input
            v-model="loginData.email"
            type="text"
            placeholder="Email"
            class="daisy-input daisy-input-bordered w-full"
            required
          >
        </div>
        <div class="mt-2">
          <label class="daisy-label">
            <span class="daisy-label-text">Password</span>
          </label>
          <input
            v-model="loginData.password"
            type="password"
            placeholder="Password"
            class="daisy-input daisy-input-bordered w-full"
            required
          >
          <label class="daisy-label justify-end mt-2">
            <span
              class="daisy-label-text cursor-pointer"
              @click="$router.push('/register')"
            >Register?</span>
          </label>
        </div>
        <div class="mt-4 text-right">
          <button type="submit" class="daisy-btn daisy-btn-primary inline-block px-6">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
