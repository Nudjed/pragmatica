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
            { text: 'network', link: '/network.html' },
            { text: 'ecosystems', link: '/innovation.html' },
            { text: 'insights', link: '/insights.html' },
        ],
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    }
}