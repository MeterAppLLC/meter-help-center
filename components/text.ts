/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "zh-CN" | "es-ES" | "fr-FR" | "pt-BR" | "ja" | "ko" | "ru"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap  = {
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