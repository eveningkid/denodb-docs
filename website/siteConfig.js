/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "denoDB",
  tagline: "MySQL, SQLite, MariaDB, PostgreSQL and MongoDB ORM for Deno",
  url: "https://eveningkid.github.io",
  repoUrl: "https://github.com/eveningkid/denodb",
  baseUrl: "/denodb-docs/",
  projectName: "denodb-docs",
  organizationName: "eveningkid",
  headerLinks: [
    { doc: "getting-started", label: "Docs" },
    { label: "GitHub", href: "https://github.com/eveningkid/denodb" },
    { label: "Help", href: "https://github.com/eveningkid/denodb/issues" },
    { search: true },
  ],
  headerIcon: "img/logo.png",
  footerIcon: "img/logo.png",
  favicon: "img/logo.png",
  colors: {
    primaryColor: "#7f749e",
    secondaryColor: "#7f749e",
  },
  highlight: {
    theme: "github",
  },
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/denodb-docs/js/code-block-buttons.js",
  ],
  stylesheets: ["/denodb-docs/css/code-block-buttons.css"],
  onPageNav: "separate",
  cleanUrl: true,
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",
  docsSideNavCollapsible: false,
  enableUpdateBy: true,
  enableUpdateTime: true,
  algolia: {
    apiKey: "d5276d45ca7f85a292f064e310ce1c8b",
    indexName: "eveningkid_denodb",
  },
};

module.exports = siteConfig;
