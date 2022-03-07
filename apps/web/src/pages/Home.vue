<script lang="ts" setup>
import { useUserStore } from "@/stores/user";

import shogun from "@/assets/images/Shogun.webp";
import router from "@/router";

const userStore = useUserStore();

const user = userStore.user;

const handleLogout = async() => {
  await userStore.logout();
  router.push("/login");
};
</script>
<template>
  <div class="h-screen grid place-items-center">
    <div class="max-w-3xl w-full p-6">
      <div class="aspect-[16/8] flex justify-center">
        <img class="h-full" :src="shogun">
      </div>

      <div>
        <div class="text-6xl font-bold text-white text-center my-10">
          Welcome, {{ user.name }}
        </div>
        <div class="text-center">
          <button class="daisy-btn daisy-btn-primary" @click="handleLogout">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
