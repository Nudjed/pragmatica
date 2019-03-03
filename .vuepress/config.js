module.exports = {
    title: 'Pragmatica',
    description: "Innovation Ecosystem Builders",
    markdown: {
        anchor: {
            permalink: false,
            permalinkBefore: false,
        }
    },
    themeConfig:{
        nav: [
            { text: 'network', link: '/network' },
            { text: 'engine', link: '/engine' },
            { text: 'projects', link: '/projects' },
        ],
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    }
}