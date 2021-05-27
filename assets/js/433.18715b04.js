(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{875:function(e,s,t){"use strict";t.r(s);var a=t(13),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"从-vuepress-0-x-迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从-vuepress-0-x-迁移"}},[e._v("#")]),e._v(" 从 VuePress 0.x 迁移")]),e._v(" "),t("h2",{attrs:{id:"站点配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#站点配置"}},[e._v("#")]),e._v(" 站点配置")]),e._v(" "),t("h3",{attrs:{id:"ga"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ga"}},[e._v("#")]),e._v(" ga "),t("Badge",{attrs:{text:"替换"}})],1),e._v(" "),t("p",[e._v("GA 已经被分离为一个单独的插件 "),t("RouterLink",{attrs:{to:"/zh/plugin/official/plugin-google-analytics.html"}},[e._v("@vuepress/plugin-google-analytics")]),e._v("。")],1),e._v(" "),t("UpgradePath",{attrs:{title:"UPGRADE"}},[t("ol",[t("li",[e._v("安装 "),t("code",[e._v("@vuepress/plugin-google-analytics")]),e._v(":")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -D @vuepress/plugin-google-analytics@next\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR npm install -D @vuepress/plugin-google-analytics@next")]),e._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("更新 "),t("code",[e._v("vuepress/config.js")]),e._v(":")])]),e._v(" "),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[e._v("module.exports = {\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("  ga: 'UA-12345678-9'\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("  plugins: [\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("    ['@vuepress/google-analytics', {\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("      ga: 'UA-12345678-9'\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("    }]\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v(" ]\n")])]),e._v("}\n")])])])]),t("h3",{attrs:{id:"markdown-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config"}},[e._v("#")]),e._v(" markdown.config "),t("Badge",{attrs:{text:"重命名"}})],1),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("extendMarkdown")]),e._v("：")]),e._v(" "),t("UpgradePath",{attrs:{title:"UPGRADE"}},[t("p",[e._v("更新 "),t("code",[e._v("vuepress/config.js")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[e._v("// vuepress/config.js\nmodule.exports = {\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("  markdown: {\n")]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("    config(md) { /* ... */ }\n")]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("  },\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("  extendMarkdown(md) { /* ... */ }\n")])]),e._v("}\n")])])])]),t("h3",{attrs:{id:"serviceworker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker"}},[e._v("#")]),e._v(" serviceWorker "),t("Badge",{attrs:{text:"替换"}})],1),e._v(" "),t("p",[e._v("Service Worker 相关的功能已经被分离为一个单独的插件 "),t("RouterLink",{attrs:{to:"/zh/plugin/official/plugin-pwa.html"}},[e._v("@vuepress/plugin-pwa")]),e._v("。")],1),e._v(" "),t("UpgradePath",{attrs:{title:"UPGRADE"}},[t("p",[e._v("参考: "),t("RouterLink",{attrs:{to:"/zh/plugin/official/plugin-pwa.html#从-0-x-迁移"}},[e._v("@vuepress/plugin-pwa > 从 0.x 迁移")])],1)]),t("h2",{attrs:{id:"默认主题配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认主题配置"}},[e._v("#")]),e._v(" 默认主题配置")]),e._v(" "),t("h3",{attrs:{id:"vuepress-override-styl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-override-styl"}},[e._v("#")]),e._v(" "),t("code",[e._v(".vuepress/override.styl")]),e._v(" "),t("Badge",{attrs:{text:"替换"}})],1),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v(".vuepress/styles/palette.styl")]),e._v(" 代替。")]),e._v(" "),t("UpgradePath",{attrs:{title:"UPGRADE"}},[t("p",[e._v("参考: "),t("RouterLink",{attrs:{to:"/zh/config/#palette-styl"}},[e._v("Config > palette.styl")])],1)]),t("h3",{attrs:{id:"vuepress-style-styl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-style-styl"}},[e._v("#")]),e._v(" "),t("code",[e._v(".vuepress/style.styl")]),e._v(" "),t("Badge",{attrs:{text:"替换"}})],1),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v(".vuepress/styles/index.styl")]),e._v(" 代替。")]),e._v(" "),t("UpgradePath",{attrs:{title:"UPGRADE"}},[t("p",[e._v("参考: "),t("RouterLink",{attrs:{to:"/zh/config/#index-styl"}},[e._v("Config > index.styl")])],1)])],1)}),[],!1,null,null,null);s.default=r.exports}}]);