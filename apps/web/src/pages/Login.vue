<script lang="ts" setup>
import yaeMiko from "@/assets/images/YaeMiko.png";
</script>

<template>
  <div class="text-center h-screen grid place-items-center">
    <div class="max-w-2xl w-full p-6">
      <div class="aspect-[16/8] flex justify-center">
        <img class="h-full" :src="yaeMiko">
      </div>
      <form class="daisy-form-control w-full max-w-xl inline-block text-white">
        <div>
          <label class="daisy-label">
            <span class="daisy-label-text">Email</span>
          </label>
          <input
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
            type="password"
            placeholder="Password"
            class="daisy-input daisy-input-bordered w-full"
            required
          >
          <label class="daisy-label justify-end mt-2">
            <span class="daisy-label-text cursor-pointer" @click="$router.push('/register')">Register?</span>
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
