(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{222:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"基于webpack4-和react16-从零开始搭建脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于webpack4-和react16-从零开始搭建脚手架"}},[e._v("#")]),e._v(" 基于webpack4+和react16+从零开始搭建脚手架")]),e._v(" "),t("h2",{attrs:{id:"一：初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一：初始化项目"}},[e._v("#")]),e._v(" 一：初始化项目")]),e._v(" "),t("pre",[t("code",[e._v("  mkdir webpack-react 创建项目目录\n  cd  webpack-react 转到项目目录\n  npm init -y 初始化项目，并全部确定\n")])]),e._v(" "),t("h2",{attrs:{id:"二：安装node，npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二：安装node，npm"}},[e._v("#")]),e._v(" 二：安装node，npm")]),e._v(" "),t("pre",[t("code",[e._v("windows 去node.js官网下载安装包直接安装\nlinux和mac mac和Linux直接命令行安装nvm install v10.15.3\n检查是否安装成功node -v, npm -v\n")])]),e._v(" "),t("h2",{attrs:{id:"三：安装webpack和webpack-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三：安装webpack和webpack-cli"}},[e._v("#")]),e._v(" 三：安装webpack和webpack-cli")]),e._v(" "),t("pre",[t("code",[e._v("npm install --save-dev webpack@4.15.1 webpack-cli \n")])]),e._v(" "),t("h2",{attrs:{id:"四：创建项目文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四：创建项目文件"}},[e._v("#")]),e._v(" 四：创建项目文件")]),e._v(" "),t("p",[e._v("新建目录src，新建index.html和index.js")]),e._v(" "),t("p",[t("strong",[e._v("index.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var element =document.getElementById('root');\nelement.innerHTML = 'hello, world!';\n")])])]),t("p",[t("strong",[e._v("index.html")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>从零搭建react项目</title>\n</head>\n<body>\n  <div id="root"></div>\n  <script src="../dist/vender.js"><\/script>\n</body>\n</html>\n\n')])])]),t("p",[e._v("新建目录build，新建文件webpack.config.js")]),e._v(" "),t("p",[t("strong",[e._v("webpack.config.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',  //打包入口文件\n  output: {\n    filename: 'vender.js', //打包生成的文件\n    path: path.resolve(__dirname, '../dist')  //打包生成文件的存放目录\n  }\n};\n")])])]),t("p",[e._v("现在的目录文件看起来是这样")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("build\n   --webpack.config.js  webpack默认配置文件\nsrc\n   --index.html 静态文件\n   --index.js 打包入口文件\nnode_modules node 依赖包目录  \npackage-lock.json webpack基本插件和依赖的版本号和信息\npackage.json 项目目录的详细描述\n")])])]),t("p",[e._v("接下去我们要通过执行webpack命令，来编译我们的代码，生成vender.js。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("webpack --config build/webpack.config.js\n")])])]),t("p",[e._v("编译完成后，刷新根目录，可以看到已经生成dist文件夹和vender.js文件。\n用浏览器打开html文件，你会看到hello word。我们成功通过webpack编译了js文件，并且没有出现问题。")]),e._v(" "),t("p",[e._v("webpack --config build/webpack.config.js命令，我们可以通过npm scripts管理起来。\n在package.json文件，我们为scripts属性配置一个build命令，其值为：webpack --config build/webpack.config.js，以下是scripts的相关代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "build": "webpack --config build/webpack.config.js"\n  }\n')])])]),t("p",[e._v("然后在命令行中运行npm run build\n生成以下机构目录")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/24/16b8807f988aea75?w=196&h=259&f=png&s=10632",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"五：安装react和react-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五：安装react和react-dom"}},[e._v("#")]),e._v(" 五：安装react和react-dom")]),e._v(" "),t("p",[e._v("在终端输入以下命令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install --save-dev react react-dom\n")])])]),t("p",[e._v("安装成功后，我们在项目使用react，我们直接修改src目录下的index.js的代码，我们用react来插入这句hello world！")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import React from "react";\nimport ReactDom from "react-dom";\n\nReactDom.render(\n    <h1>hello,word!</h1>,\n    document.getElementById(\'root\')\n);\n')])])]),t("p",[e._v("好了，我们再编译试试看。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm run build\n")])])]),t("p",[e._v("失败了？对不对！首先，我告诉你这段代码没有任何问题为什么会失败？因为webpack只识别JavaScript文件，而且只能编译es5版本的JavaScript语法。实际上，我们使用ES2015，以及jsx的语法糖，webpack它根本不认识啊。怎么办？webpack 可以使用 loader 来预处理文件。它不仅仅可以处理JavaScript本身，还允许你打包任何的静态资源。\n其中，babel-loader，就是这样一个预处理插件，它加载 ES2015+ 代码，然后使用 Babel 转译为 ES5。我们来了解下如何在webpack配置babel-loader。")]),e._v(" "),t("p",[e._v("首先安装babel相关的模块：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install --save-dev babel-loader @babel/preset-react @babel/preset-env @babel/core\n")])])]),t("p",[e._v("除了babel-loader，我们还安装了好多的包，其中@babel/core是babel的核心模块，@babel/preset-env是转译ES2015+的语法，@babel/preset-react是转译react的JSX以及FLOW。")]),e._v(" "),t("p",[e._v("第二步，你需要在根目录建立一个.babelrc的文件，配置相关的presets：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n      "presets": [\n        [\n          "@babel/preset-env",\n          {\n            "targets": {\n              "browsers": [\n                "> 1%",\n                "last 5 versions",\n                "ie >= 8"\n              ]\n            }\n          }\n        ],\n        "@babel/preset-react"\n      ]\n    }\n')])])]),t("p",[e._v("第三步，修改webpack.config.js文件。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'vender.js',\n    path: path.resolve(__dirname, '../dist')\n  },\n  module: {\n      rules:[\n          {\n              test: /\\.js?$/,\n              use:\"babel-loader\"\n          }\n      ]\n  }\n};\n")])])]),t("p",[e._v("在 webpack 配置中定义 loader 时，要定义在 module.rules 中。其中，test和use属性是必须的。include属性，定义了rules执行的范围。这告诉 webpack 编译器如下信息：\n嘿，webpack 编译器，你在编译文件过程中，如果这个是在app目录下的js文件，在你对它打包之前，先使用 babel-loader 转换一下。")]),e._v(" "),t("p",[e._v("重新执行本地编译")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm run build\n")])])]),t("p",[e._v("这次不再报错，编译成功。\n好了，再次打开src目录的index.html，页面成功显示了hello world。")])])}),[],!1,null,null,null);a.default=n.exports}}]);