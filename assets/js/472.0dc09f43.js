(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{967:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("前提条件")]),s._v(" "),a("p",[s._v("VuePress 需要 "),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),a("OutboundLink")],1),s._v(" >= 8.6")])]),s._v(" "),a("p",[s._v("本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建并进入一个新目录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" vuepress-starter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vuepress-starter\n")])])])]),s._v(" "),a("li",[a("p",[s._v("使用你喜欢的包管理器进行初始化")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm init")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("将 VuePress 安装为本地依赖")]),s._v(" "),a("p",[s._v("我们已经不再推荐全局安装 VuePress")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("如果你的现有项目依赖了 webpack 3.x，我们推荐使用 "),a("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),a("OutboundLink")],1),s._v(" 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。")])])]),s._v(" "),a("li",[a("p",[s._v("创建你的第一篇文档")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在 "),a("code",[s._v("package.json")]),s._v(" 中添加一些 "),a("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"}},[s._v("scripts"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在本地启动服务器")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run docs:dev")]),s._v("\n")])])]),a("p",[s._v("VuePress 会在 "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080"),a("OutboundLink")],1),s._v(" 启动一个热重载的开发服务器。")])])]),s._v(" "),a("p",[s._v("现在，你应该已经有了一个简单可用的 VuePress 文档。接下来，了解一下推荐的 "),a("RouterLink",{attrs:{to:"/zh/spring/directory-structure.html"}},[s._v("目录结构")]),s._v(" 和 VuePress 中的 "),a("RouterLink",{attrs:{to:"/zh/spring/basic-config.html"}},[s._v("基本配置")]),s._v("。")],1),s._v(" "),a("p",[s._v("等你了解完上文介绍的基础概念，再去学习一下如何使用 "),a("RouterLink",{attrs:{to:"/zh/spring/assets.html"}},[s._v("静态资源")]),s._v("，"),a("RouterLink",{attrs:{to:"/zh/spring/markdown.html"}},[s._v("Markdown 拓展")]),s._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/spring/using-vue.html"}},[s._v("在 Markdown 中使用 Vue")]),s._v(" 来丰富你的文档内容。")],1),s._v(" "),a("p",[s._v("当你的文档逐渐成型的时候，不要忘记 VuePress 的 "),a("RouterLink",{attrs:{to:"/zh/spring/i18n.html"}},[s._v("多语言支持")]),s._v(" 并了解一下如何将你的文档 "),a("RouterLink",{attrs:{to:"/zh/spring/deploy.html"}},[s._v("部署")]),s._v(" 到任意静态文件服务器上。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);