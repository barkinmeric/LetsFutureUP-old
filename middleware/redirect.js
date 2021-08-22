export default function({ isHMR, req, redirect }) {
	if (isHMR) return;
	if (req) {
		let locale = req.headers["accept-language"]
			.split(",")[0]
			.toLocaleLowerCase()
			.substring(0, 2);
		redirect(`/${locale}`);
	}
}
