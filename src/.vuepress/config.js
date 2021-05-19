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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
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
        link: "/guide/",
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
          title: "Our Crazy Button architecture",
          collapsable: false,
          children: ["ourCrazyButton"],
        },
        {
          title: "Building button page",
          collapsable: false,
          children: ["buildingButtonPage"],
        },
        {
          title: "Building WebSocket server",
          collapsable: false,
          children: ["bulidingWebSocketServer"],
        },
        {
          title: "Serving index.html and starting WebSocket server",
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
