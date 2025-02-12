//import english from "@/locales/en/translation.json";
//import french from "@/locales/fr/translation.json";
//import german from "@/locales/de/translation.json";

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
	compatibilityJSON: "v3",
	resources: {
		en: { translation: {} },
		fr: { translation: {} },
		de: { translation: {} },
	},
	debug: false,
	fallbackLng: "en",
	react: { useSuspense: false },
})

export default i18n
