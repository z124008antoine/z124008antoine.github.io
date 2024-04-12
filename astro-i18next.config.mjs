/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "en",
    locales: ["en", "fr"],
    namespaces: ["common", "home", "process", "about"],
    defaultNamespace: "common",
    routes: {
        fr: {
            about: "a-propos",
            "process": "processus",
        },
    },
}