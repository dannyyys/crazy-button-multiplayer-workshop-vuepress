const { description } = require("../../package");

const sidebar = require("vuepress-auto-sidebar");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Crazy Button Workshop",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#d71440" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "../static/favicon/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "../static/favicon/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "../static/favicon/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "../static/favicon/site.webmanifest" }],
    ["link", { rel: "shortcut icon", href: "../static/favicon/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#d71440" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/intro",
      },
    ],

    nextLinks: true,
    prevLinks: true,
    sidebar: {
      "/guide/": [
        {
          title: "Introduction",
          collapsable: false,
          children: ["intro"],
        },
        {
          title: "Client Server Architecture",
          collapsable: false,
          children: ["clientServerArch"],
        },
        {
          title: "WebSocket",
          collapsable: false,
          children: ["webSocket"],
        },
        {
          title: "Our Crazy Button Architecture",
          collapsable: false,
          children: ["ourCrazyButton"],
        },
        {
          title: "Building our Crazy Button page",
          collapsable: false,
          children: ["buildingButtonPage"],
        },
        {
          title: "Building our WebSocket server",
          collapsable: false,
          children: ["bulidingWebSocketServer"],
        },
        {
          title: "Let's run it!!",
          collapsable: false,
          children: ["servingHtmlStartServer"],
        },
      ],
    },
  },

  dest: "public",

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
