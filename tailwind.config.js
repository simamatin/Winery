/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        fontFamily: {
            "Karla": "Karla",
            "MontserratMedium": "Montserrat-Medium",
            "MontserratThin": "MontserratThin",
            "PlayfairDisplay": "PlayfairDisplay",
        },
        extend: {
            colors: {
                "claret": {
                    200: "#FF6365",
                    400: "#7f0f41",
                    600: "#45152A",
                    800: "#1f0a13",
                    900: "#212934"
                },
            },
            fontSize: {
                "middleBase": "15px",
                "1xl": "22px",
                "2.5xl": "28px",
                "8.5xl": "100px",
            },
            container: {
                center: true,
                padding: {
                    "DEFAULT": "1rem",
                    "xs": "1.5rem",
                    "sm": "2.5rem",
                    "md": "3.5rem",
                    "lg": "4.5rem",
                    "xl": "5.5rem",
                }
            },
            backgroundImage: {
                "banner": "url(../images/2024/header-background-scaled.jpg)",
                "wine-background": "url(../images/2024/hero-background-full-scaled.jpg)",
                "background-footer": "url(../images/2024/footer-background-scaled.jpg)",
            },
            screens: {
                "min-xs": "320px",
                "xs": "480px",
                "sm": "640px",
                "md": "768px",
                "lg": "1024px",
                "xl": "1280px",
            }
        },
    },
    plugins: [function ({addVariant}) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }],
}

