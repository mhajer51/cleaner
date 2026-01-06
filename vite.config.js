import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react";

const manualChunkGroups = [
    {
        name: "react-vendor",
        patterns: [
            /node_modules\/react\//,
            /node_modules\/react-dom\//,
            /node_modules\/react-router-dom\//,
            /node_modules\/scheduler\//,
        ],
    },
    {
        name: "mui-core",
        patterns: [/node_modules\/@mui\/(material|lab)\//, /node_modules\/@mui\/base\//],
    },
    {
        name: "mui-icons",
        patterns: [/node_modules\/@mui\/icons-material\//],
    },
    {
        name: "mui-data-grid",
        patterns: [/node_modules\/@mui\/x-data-grid/],
    },
    {
        name: "mui-x",
        patterns: [/node_modules\/@mui\/x-(charts|date-pickers|tree-view)/],
    },
    {
        name: "emotion",
        patterns: [/node_modules\/@emotion\//],
    },
    {
        name: "i18n",
        patterns: [/node_modules\/i18next\//, /node_modules\/react-i18next\//],
    },
    {
        name: "forms",
        patterns: [/node_modules\/formik\//, /node_modules\/yup\//],
    },
    {
        name: "media",
        patterns: [/node_modules\/@vidstack\//, /node_modules\/swiper\//],
    },
    {
        name: "syntax-highlighter",
        patterns: [/node_modules\/react-syntax-highlighter\//],
    },
    {
        name: "lightbox",
        patterns: [/node_modules\/yet-another-react-lightbox\//],
    },
    {
        name: "utilities",
        patterns: [
            /node_modules\/dayjs\//,
            /node_modules\/react-use\//,
            /node_modules\/js-cookie\//,
            /node_modules\/autosuggest-highlight\//,
        ],
    },
];

const resolveManualChunk = (id) => {
    if (!id.includes("node_modules")) return null;

    const normalizedId = id.replace(/\\/g, "/");
    const matchedGroup = manualChunkGroups.find(({ patterns }) =>
        patterns.some((pattern) => pattern.test(normalizedId)),
    );

    return matchedGroup ? matchedGroup.name : "vendor";
};

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        tsconfigPaths()
    ],

    optimizeDeps: {
        include: ["pusher-js"],
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        hmr: {
            host: 'cleaner.localhost', // Match the domain opened in the browser
            protocol: 'ws',
            port: 5173,
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    return resolveManualChunk(id) ?? undefined;
                },
            },
        },
    },
});

