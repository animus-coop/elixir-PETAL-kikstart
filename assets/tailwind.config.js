// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration
module.exports = {
    mode: "jit",
    purge: ["../lib/*_web/**/*.*ex", "./js/**/*.js"],
    content: [
        './js/**/*.js',
        '../lib/*_web.ex',
        '../lib/*_web/**/*.*ex'
    ],
    theme: {
        extend: {},
    },
    plugins: []
}