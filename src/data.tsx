import { ReactNode } from "react"
import { Icon } from "./Icon"

export interface IWork {
  company: string
  position: string
  skills: string[]
  time: string
  descriptions: string[]
  links?: {
    text: ReactNode
    url: string
  }[]
}

export const works: IWork[] = [
  {
    company: "知乎",
    position: "社区前端工程师",
    skills: ["React", "TS"],
    time: "2022.10 - 今",
    descriptions: [
      "低代码编排平台，实现业务逻辑可视化编辑，业务节点数据动态配置，支撑非研发人员的业务开发",
      "lib-canary 灰度发布工具，实现基于用户和设备的灰度发布，保障新功能稳定可控上线",
      "lib-apollo 配置接入，实现基于 Apollo 的配置中心，支持应用配置的秒级动态更新",
    ],
  },
  {
    company: "北京交研智慧",
    position: "前端工程师",
    skills: ["React", "TS", "JS"],
    time: "2022.07 - 2022.10",
    descriptions: [
      "重构项目代码，推广 hook 使用，设计和 MR 搭配使用的 Git Flow 工作流",
    ],
  },
  {
    company: "天津光电",
    position: "前端工程师",
    skills: ["Vue", "JS"],
    time: "2022.05 - 2022.07",
    descriptions: ["工程化；创建可配置可自定义的表单组件和表格组件"],
  },
  {
    company: "知乎",
    position: "社区前端工程师",
    skills: ["React", "TS"],
    time: "2021.03 - 2021.06",
    descriptions: [
      "使用 React / React hook 进行社区前端的日常维护、开发、Code Review 等",
      "负责评论区表情和图片的发送和渲染，参与编辑器和回答内容渲染系统的迁移和重构",
      "负责知乎回答编辑器的报警信息收集，设计并实现报警指标",
      "负责新人文档的维护，包括报警系统，CI/CD，路由维护。整理了较全面的入门文档",
    ],
  },
]

export interface IProject {
  name: string
  type: string
  skills?: string[]
  links?: {
    text: ReactNode
    url: string
  }[]
  time: string
  descriptions?: string[]
}

export const projects: IProject[] = [
  {
    name: "LinkAlias 链接管理平台",
    type: "开源项目",
    links: [
      {
        text: <Icon name="i-logos-github-icon" />,
        url: "https://github.com/YuJianghao/LinkAlias",
      },
    ],
    time: "2023.4 - 今",
  },
  {
    name: "Hexon:针对 hexo 博客的在线博客编辑器",
    type: "独立开源项目",
    skills: ["Vue", "TS", "Koa"],
    links: [
      {
        text: <Icon name="i-logos-github-icon" />,
        url: "https://link.yujianghao.cn/hexongithub",
      },
    ],
    time: "2019.12 - 今",
    descriptions: [
      "Vue3 + Pinia + Vite + Koa + Typescript 实现从产品原型到代码编写的全栈开发",
      "开发 Hexon UI 组件库，用于支持 hexon 应用开发",
    ],
  },
  {
    name: "仿 Things3 的待办应用",
    type: "技术探索",
    links: [
      {
        text: "在线演示",
        url: "http://todo.yujianghao.cn/#/project/inbox",
      },
    ],
    time: "2020.10",
    descriptions: [
      "Typescript 开发后端功能，TQL 构建 GraphQL 查询语句，TypeORM + Sqlite 操作数据库",
    ],
  },
  {
    name: "Keybinding.js:针对 HTML 的简易快捷键绑定包",
    type: "Node.js 包",
    links: [
      {
        text: <Icon name="i-logos-npm-icon" />,
        url: "https://www.npmjs.com/package/@winwin/keybinding.js",
      },
    ],
    time: "2020.10",
  },
]
