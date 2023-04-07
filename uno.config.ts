// uno.config.ts
import { defineConfig, presetUno, presetIcons, type Rule } from "unocss"

const COLOR_KEYS = ["light", "primary", "secondary", "decorate"]
const colorRules = COLOR_KEYS.reduce((acc, key) => {
  acc.push([
    `bg-${key}`,
    {
      ["background-color"]: `var(--color-${key})`,
    },
  ])
  acc.push([
    `color-${key}`,
    {
      color: `var(--color-${key})`,
    },
  ])
  return acc
}, [] as Rule[])

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  rules: [...colorRules],
})
