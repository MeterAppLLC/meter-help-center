export { locales as middleware } from "nextra/locales";

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         */
        '/((?!static|robots\\.txt).*)'

    ]
};