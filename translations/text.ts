/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "zh-CN" | "es-ES" | "fr-FR" | "pt-BR" | "ja" | "ko" | "ru"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
    "en-US": "English",
    "es-ES": "Español",
    "fr-FR": "Français",
    "pt-BR": "Português Brasileiro",
    "zh-CN": "简体中文",
    ja: "日本語",
    ko: "한국어",
    ru: "Русский",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
    "en-US": "Edit this page on GitHub →",
    "es-ES": "Edite esta página en GitHub →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
    "en-US": "On This Page",
    "es-ES": "En esta página",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
    "en-US": "Search documentation...",
    "es-ES": "Buscar documento...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
    "en-US": "Last updated on",
    "es-ES": "Ultima actualización en",
};