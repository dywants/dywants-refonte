const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
    ],

    theme: {
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            keyframes: {
                moveY: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(25px)" },
                },
                rotateZ: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                moveY: "moveY 2s infinite",
                rotateZ: "rotateZ 20s infinite",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
