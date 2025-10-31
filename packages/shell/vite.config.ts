import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

const getDashboardUrl = () => {
  return process.env.VITE_DASHBOARD_URL || "http://localhost:5001";
};

const getProductsUrl = () => {
  return process.env.VITE_PRODUCTS_URL || "http://localhost:5002";
};

const getSettingsUrl = () => {
  return process.env.VITE_SETTINGS_URL || "http://localhost:5003";
};

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        dashboard: `dashboard@${getDashboardUrl()}/mf-manifest.json`,
        products: `products@${getProductsUrl()}/mf-manifest.json`,
        settings: `settings@${getSettingsUrl()}/mf-manifest.json`,
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
