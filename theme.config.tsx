import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import useLocalesMap from "./pages/component/use-locales-map";
import {editTextMap, gitTimestampMap, searchPlaceholderMap, tableOfContentsTitleMap} from "./translations/text";
import {useRouter} from "next/router";

const config: DocsThemeConfig = {
    logo: <span>Meter App</span>,
    docsRepositoryBase: 'https://github.com/MeterAppLLC/meter-help-center',
    search: {
        placeholder: () => useLocalesMap(searchPlaceholderMap),
    },
    toc: {
        float: true,
        title: () => useLocalesMap(tableOfContentsTitleMap),
    },
    feedback: {
        content: null
    },
    editLink: {
        text: null
    },
    footer: {
        text: 'Meter App LLC',
    },
    gitTimestamp({ timestamp }) {
        const { locale } = useRouter();
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
