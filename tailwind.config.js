const colors = require("tailwindcss/colors")

module.exports = {
	darkMode: "class",
	
    content: [
		"./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
		"./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
	],

    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
            green: colors.green,
            red: colors.red,
        },
      	extend: {

        },
    },

    plugins: [],
}
