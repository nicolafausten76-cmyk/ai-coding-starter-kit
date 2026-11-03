import { extendTailwindMerge } from "tailwind-merge"
import { describe, expect, it } from "vitest"

import { cn } from "./utils"

describe("cn", () => {
  it("keeps a font size and a color side by side", () => {
    expect(cn("text-sm", "text-muted-foreground")).toBe("text-sm text-muted-foreground")
  })

  it("lets the last font size win", () => {
    expect(cn("text-sm", "text-lg")).toBe("text-lg")
  })
})

describe("custom font size pattern from utils.ts", () => {
  const merge = extendTailwindMerge({
    extend: { classGroups: { "font-size": [{ text: ["label"] }] } },
  })

  it("keeps a registered custom font size next to a color", () => {
    expect(merge("text-label", "text-muted-foreground")).toBe("text-label text-muted-foreground")
  })

  it("replaces a registered custom font size with another font size", () => {
    expect(merge("text-label", "text-sm")).toBe("text-sm")
  })
})
