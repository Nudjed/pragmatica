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
            { text: 'network', link: './network.html' },
            { text: 'engine', link: './engine.html' },
            { text: 'projects', link: './projects.html' },
        ],
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    }
}