import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    site: 'https://maulik9211.github.io',
    base: '/maulik9211.github.io',

    integrations: [react(), astroImageTools],
    vite: {
        ssr: {
            noExternal: ["react-icons"],
        },
    },
});