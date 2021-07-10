import tr from "../locales/tr.json";
import en from "../locales/en.json";

const i18n = {
	locale: "tr",
	fallbackLocale: "tr",
	messages: { tr, en },
};

const pages = {
	"our-story": {
		tr: "/hikayemiz",
		en: "/our-story",
	},
	"about-us": {
		tr: "/hakkimizda",
		en: "/about-us",
	},
	"project-team": {
		tr: "/proje-ekibi",
		en: "/about-us",
	},
	faq: {
		tr: "/sss",
		en: "/faq",
	},
	"announcements/index": {
		tr: "/duyurular",
		en: "/announcements",
	},
	"announcements/_name": {
		tr: "/duyurular/:name",
		en: "/announcements/:name",
	},
	"events/index": {
		tr: "/etkinlikler",
		en: "/events",
	},
	"events/_name": {
		tr: "/etkinlikler/:name",
		en: "/events/:name",
	},
	"news/index": {
		tr: "/haberler",
		en: "/news",
	},
	"news/_name": {
		tr: "/haberler/:name",
		en: "/news/:name",
	},
};

export { i18n, pages };
