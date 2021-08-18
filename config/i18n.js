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
		en: "/project-team",
	},
	faq: {
		tr: "/sss",
		en: "/faq",
	},
	"mentorship-program": {
		tr: "/mentorluk-programi",
		en: "/mentorship-program",
	},
	"student-program": {
		tr: "/ogrenci-gelisim-programi",
		en: "/student-program",
	},
	startup: {
		tr: "/startup",
		en: "/startup",
	},
	wetalk: {
		tr: "/wetalk",
		en: "/wetalk",
	},
	talentup: {
		tr: "/talentup",
		en: "/talentup",
	},
	adviceup: {
		tr: "/adviceup",
		en: "/adviceup",
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
};

export { i18n, pages };
