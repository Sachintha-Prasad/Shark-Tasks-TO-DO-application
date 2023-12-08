/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif"
            },
            screens: {
                mobile: "400px"
            }
        }
    },
    plugins: []
};
