import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
// import vue2 from '@vitejs/plugin-vue2';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [
            laravel({
                input: [
                    "resources/css/classic.scss",
                    "resources/css/modern.scss",
                    "resources/css/showcase.scss",
                    "resources/js/site.js",

                    // Control Panel assets.
                    // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                    "resources/css/cp.css",
                    // "resources/js/cp.js",
                ],
                refresh: true,
            }),
            // vue2(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
        server: {
            open: env.APP_URL,
        },
        define: {
            appName: JSON.stringify(env.APP_NAME),
        },
    };
});
