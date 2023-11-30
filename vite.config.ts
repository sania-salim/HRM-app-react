import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/HRM-app-react/",
//   plugins: [svgr(), react()],
// });

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [svgr(), react()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/HRM-app-react/";
  }

  return config;
});
