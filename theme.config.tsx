import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import useLocalesMap from "./components/use-locales-map";
import {gitTimestampMap, searchPlaceholderMap, tableOfContentsTitleMap} from "./components/text";
import {useRouter} from "next/router";
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
    gitTimestamp({timestamp}) {
        const {locale} = useRouter();
        const lastUpdatedOn = useLocalesMap(gitTimestampMap);

        return (
            <>
                {lastUpdatedOn}{" "}
                <time dateTime={timestamp.toISOString()}>
                    {timestamp.toLocaleDateString(locale, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </time>
            </>
        );
    },
    i18n: [
        {locale: 'en-US', text: 'English'},
        {locale: 'es-ES', text: 'Español'},
    ]
}

export default config
