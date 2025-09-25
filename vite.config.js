import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        "vue-router", // если используете vue-router
        "@vueuse/head",
      ],
      eslintrc: {
        enabled: true, // генерация конфига для ESLint
      },
      dirs: [
        "./hooks",
        "./composables", // only root modules
        "./composables/**", // all nested modules
        {
          glob: "./composables",
          types: false, // If top level dirsScanOptions.types importing enabled, just only disable this directory
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    // Automatically resolve index.vue
    extensions: [".js", ".vue", ".json"],
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
