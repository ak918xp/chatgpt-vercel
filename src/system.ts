import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- 本网站由@Heinrich创建，仅供学习和研究，不提供长期服务，请勿滥用，长期使用请 [自行部署](https://github.com/ourongxing/chatgpt-vercel#%E9%83%A8%E7%BD%B2%E4%B8%80%E4%B8%AA%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84-chatgpt-%E7%BD%91%E7%AB%99%E5%85%8D%E8%B4%B9)，简单成本低。
- 本网站域名和api_Key由@Heinrich自费提供，请不要随意分享网站或发布违禁词汇，这可能会导致服务不可用或者域名被墙。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
