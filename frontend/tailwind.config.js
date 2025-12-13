/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0f172a',
                    accent: '#06b6d4', // Cyan
                    secondary: '#8b5cf6', // Violet
                    surface: '#1e293b'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            }
        },
    },
    plugins: [],
}
