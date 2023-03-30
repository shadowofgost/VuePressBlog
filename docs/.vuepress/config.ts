/*
 * @Author           : Albert Wang
 * @Time             : 2023-01-19 16:56:52
 * @Description      :
 * @Email            : shadowofgost@outlook.com
 * @FilePath         : /VuePressBlog/docs/.vuepress/config.ts
 * @LastTime         : 2023-01-19 18:25:48
 * @LastAuthor       : Albert Wang
 * @Software         : Vscode
 *  Copyright Notice : Copyright (c) 2023 Albert Wang 王子睿, All Rights Reserved.
 */
import { defineUserConfig } from "vuepress";
import  hopeTheme  from "./theme";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Theme Demo",
      description: "A demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "主题演示",
      description: "vuepress-theme-hope 的演示",
    },
  },
  theme:hopeTheme,
});
