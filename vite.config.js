import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssSortMediaQueries({ sort: "desktop-first" }),
        autoprefixer({
          overrideBrowserslist: ["last 3 versions", "ie >= 10"],
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "sass:math"; @use "@/assets/scss/base/global" as *; @use "@/assets/scss/base/mixins" as *;',
      },
    },
  },
});
