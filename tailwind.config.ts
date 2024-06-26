import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'xxs': '300px',
                "iphone-landscape": { "raw": "(max-height: 400px) and (max-width: 1000px)"}
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            typography: () => ({
                dark: {
                  css: {
                    color: 'white',
                  },
                },
            }),
            dropShadow: {
                slight: "1px 1px 1px black"
            },
            boxShadow: {
                card_dark: "0 0 15px -10px rgba(0,0,0,.3), 0 0 25px -15px rgba(0,0,0,.2)"
            }
        },
    },
    plugins: [],
};
export default config;
