import { defineConfig, loadEnv } from "vite";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";
import imagemin from "unplugin-imagemin/vite";

import { resolve } from "path";

export default ({ mode }) => {
  const { VITE_PORT, VITE_BASE_URL } = loadEnv(mode, process.cwd());
  return defineConfig({
    base: VITE_BASE_URL,
    server: {
      cors: {
        origin: "https://admin.kaskad-nn.ru",
      },
      port: VITE_PORT,
      host: "0.0.0.0",
      open: true,
      proxy: {},
    },
    plugins: [
      vue(),
      imagemin({
        // Default mode sharp. support squoosh and sharp
        mode: "sharp",
        beforeBundle: false,
        // Default configuration options for compressing different pictures
        compress: {
          jpg: {
            quality: 80,
          },
          jpeg: {
            quality: 80,
          },
          png: {
            quality: 80,
          },
          webp: {
            quality: 80,
          },
        },
        conversion: [
          { from: "jpeg", to: "webp" },
          { from: "JPEG", to: "webp" },
          { from: "png", to: "webp" },
          { from: "PNG", to: "webp" },
          { from: "JPG", to: "webp" },
          { from: "jpg", to: "webp" },
        ],
      }),
      AutoImport({
        imports: ["vue", "vue-router", "@vueuse/head"],
        eslintrc: {
          enabled: true, // генерация конфига для ESLint
        },
        dirs: ["src/composables", "src/store", "src/utils"],
      }),
    ],
    build: {
      rollupOptions: {
        // input: {
        //   app: "./src//main.js",
        // },
      },
      // watch: {
      //   include: [resolve(__dirname, "./src/**")],
      // },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
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
};
