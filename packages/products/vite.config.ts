import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "products",
      filename: "remoteEntry.js",
      manifest: true,
      publicPath: "auto",
      exposes: {
        "./Router": "./src/router/index.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
        "@chakra-ui/react": {},
        "@emotion/react": { singleton: true },
        "@emotion/styled": { singleton: true },
        "framer-motion": {},
      },
    }),
  ],
  server: {
    port: 5002,
    strictPort: true,
    cors: true,
    origin: process.env.VITE_ORIGIN || "http://localhost:5002",
  },
  preview: {
    port: 5002,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
});
