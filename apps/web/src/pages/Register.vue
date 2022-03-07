<script lang="ts" setup>
import type { RegisterUserDto } from "api/src/modules/auth/dto/auth.dto";
import kequing from "@/assets/images/Kequing.webp";

import { useUserStore } from "@/stores/user";

import router from "@/router";

const userStore = useUserStore();

const registerData: RegisterUserDto = {
  email: "",
  name: "Chris",
  password: "",
};

const handleRegistration = async() => {
  await userStore.register(registerData);
  router.push("/");
};
</script>

<template>
  <div class="text-center h-screen grid place-items-center">
    <div class="max-w-2xl w-full p-6">
      <div class="aspect-[16/8] flex justify-center">
        <img
          class="h-full"
          :src="kequing"
        >
      </div>
      <form
        class="daisy-form-control w-full max-w-xl inline-block text-white"
        @submit.prevent="handleRegistration"
      >
        <div>
          <label class="daisy-label">
            <span class="daisy-label-text">Email</span>
          </label>
          <input
            v-model="registerData.email"
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
            v-model="registerData.password"
            type="password"
            placeholder="Password"
            class="daisy-input daisy-input-bordered w-full"
            required
          >
          <label class="daisy-label justify-end mt-2">
            <span class="daisy-label-text cursor-pointer" @click="$router.push('/')">Login?</span>
          </label>
        </div>
        <div class="mt-4 text-right">
          <button type="submit" class="daisy-btn daisy-btn-primary inline-block px-6">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
