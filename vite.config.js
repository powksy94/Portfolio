import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],

  server: {
    port: 5173,
    strictPort: true, // échoue si le port est déjà pris
    open: true,       // ouvre le navigateur automatiquement
  },
});
