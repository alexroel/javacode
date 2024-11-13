import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { sidebar } from "./src/config/sidebar";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Javacode",
			title: {
				es: "Javcode",
				en: "Javacode",
			},
			defaultLocale: "root", // opcional
			locales: {
				root: {
					label: "Español",
					lang: "es", // lang es obligatorio para los locales raíz
				},
				en: {
					label: "English",
					lang: "en",
				},
			},
			logo: {
				src: "./src/assets/logo-javacode.svg",
				alt: "Javacode Logo",
				// replacesTitle: true,
			},
			customCss: [
				// Ruta relativa a tu archivo CSS personalizado
				"@fontsource-variable/inter/index.css",
				"./src/styles/custom.css",
			],
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: sidebar,
		}),
	],
});
