import {useRouter} from "next/router";
import useLocalesMap from "./components/use-locales-map";
import {
    editTextMap,
    feedbackLinkMap,
    gitTimestampMap,
    languageMap,
    searchPlaceholderMap,
    tableOfContentsTitleMap,
} from "./translations/text";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
    project: {
        link: "https://github.com/MeterAppLLC/meter-help-center",
    },
    docsRepositoryBase: "https://github.com/MeterAppLLC/meter-help-center/blob/main",
    useNextSeoProps() {
        return {
            titleTemplate: "%s – Meter App Help Center",
            description: "Search, browse, and learn how to use the Meter App",
        };
    },
    toc: {
        float: true,
        title: () => useLocalesMap(tableOfContentsTitleMap),
    },
    search: {
        placeholder: () => useLocalesMap(searchPlaceholderMap),
    },
    editLink: {
        text: () => useLocalesMap(editTextMap),
    },
    feedback: {
        content: () => useLocalesMap(feedbackLinkMap),
    },
    logo: <span>Meter App</span>,
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
    i18n: Object.entries(languageMap).map(([locale, text]) => ({
        locale,
        text,
    })),
};

export default themeConfig;
