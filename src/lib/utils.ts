import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Add custom fontSize names from tailwind.config.ts here, e.g. ["lead", "label"].
// Otherwise tailwind-merge reads "text-label" as a color and silently drops it
// when combined with a color class such as "text-muted-foreground".
const customFontSizes: string[] = []

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: customFontSizes }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
