import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    preview: {
        port: 4050,
        strictPort: true,
    },
    server: {
        port: 4050,
        strictPort: true,
        host: true,
        origin: "http://0.0.0.0:4050",
    },
});