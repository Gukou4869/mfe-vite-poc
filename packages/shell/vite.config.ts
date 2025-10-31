import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        dashboard: "dashboard@http://localhost:5001/mf-manifest.json",
        products: "products@http://localhost:5002/mf-manifest.json",
        settings: "settings@http://localhost:5003/mf-manifest.json",
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
    port: 5000,
    strictPort: true,
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
