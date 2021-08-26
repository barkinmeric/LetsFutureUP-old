import { pages } from "./config/i18n";
import { routes } from "./config/sitemap";

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Let's FutureUP",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "robots", content: "follow,index" },
			{ "http-equiv": "X-UA-Compatible", content: "IE=edge" },
			{ name: "keywords", content: "Let's FutureUP, Mentorluk Programı, Öğrenci Gelişim Programı, Mentorluk, Menteelik, Mentor ve Mentee" },
		],
		link: [{ rel: "icon", type: "image/png", href: "/favicon/favicon.png" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/normalize.css", "@/assets/css/montserrat.css", "@/assets/scss/colors.scss", "@/assets/scss/style.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		dirs: ["~/components", "~/components/icons", "~/components/index", "~/components/mentorship", "~/components/team"],
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxtjs/pwa", "@nuxt/image", "@nuxtjs/style-resources"],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/i18n", "@nuxtjs/robots", "@nuxtjs/sitemap"],

	pwa: {
		meta: false,
		// icon: false,
		// manifest: false,
	},

	image: {},

	styleResources: {
		scss: ["./assets/scss/colors.scss"],
	},

	i18n: {
		strategy: "prefix",
		langDir: "~/locales/",
		locales: [
			{ code: "tr", iso: "tr-TR", file: "tr.json", name: "Türkçe" },
			{ code: "en", iso: "en-US", file: "en.json", name: "English" },
		],
		detectBrowserLanguage: false,
		baseUrl: "https://letsfutureup-nuxt.netlify.app",
		parsePages: false,
		pages: pages,
	},

	robots: {
		UserAgent: "*",
		Allow: "",
		Disallow: "/*.pdf",
		Sitemap: "https://letsfutureup-nuxt.netlify.app/sitemap.xml",
	},

	sitemap: {
		hostname: "https://letsfutureup-nuxt.netlify.app",
		exclude: ["/*"],
		routes: routes,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
