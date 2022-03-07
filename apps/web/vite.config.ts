import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

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
      dts: "src/@types/auto-imports.d.ts",
    }),

    Component({
      resolvers: [],
      extensions: ["vue"],
      deep: true,
      dts: "src/@types/components.d.ts",
    }),

    vue(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vue Monorepo",
        short_name: "Vue Monorepo",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
