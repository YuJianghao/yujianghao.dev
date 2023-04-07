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
  id: string
  name: string
  skills?: string[]
  repo: string
}

export const projects: IProject[] = [
  {
    id: "LinkAlias",
    name: "链接管理平台",
    repo: "https://github.com/YuJianghao/LinkAlias",
  },
  {
    id: "heoxn",
    name: "在线 hexo 博客编辑器",
    repo: "https://github.com/gethexon/hexon",
  },
  {
    id: "koa-authentication",
    name: "极简 koa 认证中间件",
    repo: "https://github.com/YuJianghao/koa-authentication",
  },
  {
    id: "imageur",
    name: "图床上传工具",
    repo: "https://github.com/YuJianghao/imageur",
  },
  {
    id: "bpmn-js-doc",
    name: "bpmn-js 开发文档",
    repo: "https://github.com/YuJianghao/bpmn-js-doc",
  },
]
