(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1047:function(e,s,t){"use strict";t.r(s);var v=t(14),_=Object(v.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[e._v("#")]),e._v(" 目录结构")]),e._v(" "),t("p",[e._v("VuePress 遵循 "),t("strong",[e._v("“约定优于配置”")]),e._v(" 的原则，推荐的目录结构如下：")]),e._v(" "),t("pre",{staticClass:"vue-container"},[t("code",[t("p",[e._v(".\n├── docs\n│   ├── .vuepress "),t("em",[e._v("("),t("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   ├── "),t("code",[e._v("components")]),e._v(" "),t("em",[e._v("("),t("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   ├── "),t("code",[e._v("theme")]),e._v(" "),t("em",[e._v("("),t("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   │   └── Layout.vue\n│   │   ├── "),t("code",[e._v("public")]),e._v(" "),t("em",[e._v("("),t("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   ├── "),t("code",[e._v("styles")]),e._v(" "),t("em",[e._v("("),t("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── "),t("code",[e._v("templates")]),e._v(" "),t("em",[e._v("("),t("strong",[e._v("可选的, 谨慎配置")]),e._v(")")]),e._v("\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── "),t("code",[e._v("config.js")]),e._v(" "),t("em",[e._v("("),t("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   └── "),t("code",[e._v("enhanceApp.js")]),e._v(" "),t("em",[e._v("("),t("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json")]),e._v("\n")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("请留意目录名的大写。")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("docs/.vuepress")]),e._v(": 用于存放全局的配置、组件、静态资源等。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/components")]),e._v(": 该目录中的 Vue 组件将会被自动注册为全局组件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/theme")]),e._v(": 用于存放本地主题。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/styles")]),e._v(": 用于存放样式相关的文件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/styles/index.styl")]),e._v(": 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/styles/palette.styl")]),e._v(": 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/public")]),e._v(": 静态资源目录。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/templates")]),e._v(": 存储 HTML 模板文件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/templates/dev.html")]),e._v(": 用于开发环境的 HTML 模板文件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/templates/ssr.html")]),e._v(": 构建时基于 Vue SSR 的 HTML 模板文件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/config.js")]),e._v(": 配置文件的入口文件，也可以是 "),t("code",[e._v("YML")]),e._v(" 或 "),t("code",[e._v("toml")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/enhanceApp.js")]),e._v(": 客户端应用的增强。")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("当你想要去自定义 "),t("code",[e._v("templates/ssr.html")]),e._v(" 或 "),t("code",[e._v("templates/dev.html")]),e._v(" 时，最好基于 "),t("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("默认的模板文件"),t("OutboundLink")],1),e._v(" 来修改，否则可能会导致构建出错。")])]),e._v(" "),t("p",[t("strong",[e._v("同时阅读:")])]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/zh/config/"}},[e._v("配置")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh/theme/"}},[e._v("主题")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html"}},[e._v("默认主题配置")])],1)]),e._v(" "),t("h2",{attrs:{id:"默认的页面路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认的页面路由"}},[e._v("#")]),e._v(" 默认的页面路由")]),e._v(" "),t("p",[e._v("此处我们把 "),t("code",[e._v("docs")]),e._v(" 目录作为 "),t("code",[e._v("targetDir")]),e._v(" （参考 "),t("RouterLink",{attrs:{to:"/zh/api/cli.html#基本用法"}},[e._v("命令行接口")]),e._v("），下面所有的“文件的相对路径”都是相对于 "),t("code",[e._v("docs")]),e._v(" 目录的。在项目根目录下的 "),t("code",[e._v("package.json")]),e._v(" 中添加 "),t("code",[e._v("scripts")]),e._v(" ：")],1),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress build docs"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("对于上述的目录结构，默认页面路由地址如下：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("文件的相对路径")]),e._v(" "),t("th",[e._v("页面路由地址")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("/README.md")])]),e._v(" "),t("td",[t("code",[e._v("/")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("/guide/README.md")])]),e._v(" "),t("td",[t("code",[e._v("/guide/")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("/config.md")])]),e._v(" "),t("td",[t("code",[e._v("/config.html")])])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);