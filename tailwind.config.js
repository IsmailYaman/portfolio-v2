/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                bounce: "bounce 2s linear infinite",
            },
            screens: {
                'xs': '540px',
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#753D9F",
                    secondary: "#4973A6",
                    accent: "#EC4B81",
                    neutral: "#191D24",
                    "base-100": "#121212",
                    info: "#67e8f9",
                    success: "#10b981",
                    warning: "#f5d547",
                    error: "#f87171",
                },
            },
            "cyberpunk"
        ],
    },
    plugins: [require("daisyui")],
};
