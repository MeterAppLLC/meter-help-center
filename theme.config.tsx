import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
const config: DocsThemeConfig = {
    logo: <span>Meter App</span>,
    docsRepositoryBase: 'https://github.com/MeterAppLLC/meter-help-center',
    feedback: {
        content: null
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
