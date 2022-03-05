import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Component from "unplugin-vue-components/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    AutoImport({
      resolvers: [],
      imports: ["vue", "vue-router", "vuex"],
      dts: "src/auto-imports.d.ts",
    }),

    Component({
      resolvers: [],
      extensions: ["vue"],
      deep: true,
      dts: "src/components.d.ts",
    }),

    vue(),
  ],
});
