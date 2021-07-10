import { i18n, pages } from "./config/i18n";

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "client",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/css/bootstrap.min.css", "~/assets/css/style.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa",
		[
			"nuxt-i18n",
			{
				locales: [
					{ code: "tr", iso: "tr-TR", name: "Türkçe" },
					{ code: "en", iso: "en-US", name: "English" },
				],
				detectBrowserLanguage: {
					useCookie: true,
					cookieKey: "i18n_redirected",
					onlyOnRoot: true,
				},
				defaultLocale: "tr",
				strategy: "prefix",
				seo: true,
				parsePages: false,
				pages: pages,
				vueI18n: i18n,
			},
		],
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: "en",
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
