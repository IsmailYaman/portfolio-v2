/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "purple-bg": "url('/public/img/purple.png')",
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#4c1d95",
                    secondary: "#d946ef",
                    accent: "#1FB2A5",
                    neutral: "#191D24",
                    "base-100": "#2A303C",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#f59e0b",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
