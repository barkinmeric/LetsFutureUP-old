import { pages } from "./config/i18n";

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Let's FutureUP",
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
	css: ["@/assets/css/normalize.css", "@/assets/scss/colors.scss", "@/assets/scss/style.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		dirs: ["~/components", "~/components/icons", "~/components/index", "~/components/mentorship"],
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxtjs/pwa", "@nuxt/image", "@nuxtjs/style-resources", "@nuxtjs/google-fonts"],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["nuxt-i18n"],

	pwa: {
		manifest: {
			lang: "en",
		},
	},

	image: {},

	styleResources: {
		scss: ["./assets/scss/colors.scss"],
	},

	i18n: {
		locales: [
			{ code: "tr", iso: "tr-TR", name: "Türkçe" },
			{ code: "en", iso: "en-US", name: "English" },
		],
		detectBrowserLanguage: {
			fallbackLocale: "en",
			useCookie: true,
			cookieKey: "i18n_redirected",
			onlyOnRoot: true,
			// alwaysRedirect: true,
		},
		vueI18n: {
			fallbackLocale: "en",
			messages: {
				tr: require("./locales/tr.json"),
				en: require("./locales/en.json"),
			},
		},
		defaultLocale: "tr",
		strategy: "prefix",
		seo: true,
		// baseUrl: "http://localhost:3000/",
		parsePages: false,
		pages: pages,
	},

	googleFonts: {
		download: true,
		prefetch: true,
		families: {
			Montserrat: {
				wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
				// ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
