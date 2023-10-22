import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import useLocalesMap from "./components/use-locales-map";
import {searchPlaceholderMap, tableOfContentsTitleMap} from "./components/text";
const config: DocsThemeConfig = {
    logo: <span>Meter App</span>,
    docsRepositoryBase: 'https://github.com/MeterAppLLC/meter-help-center',
    feedback: {
        content: null
    },
    search: {
        placeholder: () => useLocalesMap(searchPlaceholderMap),
    },
    toc: {
        float: true,
        title: () => useLocalesMap(tableOfContentsTitleMap),
    },
    editLink: {
        text: null
    },
    footer: {
        text: 'Meter App LLC',
    },
    i18n: [
        {locale: 'en-US', text: 'English'},
        {locale: 'es-ES', text: 'Español'},
    ]
}

export default config
