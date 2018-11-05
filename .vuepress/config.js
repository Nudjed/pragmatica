module.exports = {
    title: 'Pragmatica',
    description: "Consulting, venturing, delivery",
    markdown: {
        anchor: {
            permalink: false,
            permalinkBefore: false,
        }
    },
    themeConfig:{
        nav: [
            { text: 'capability', link: '/capability.html' },
            { text: 'projects', link: '/projects.html' },
            { text: 'about us', link: '/about.html' },
        ],
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    }
}