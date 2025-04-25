import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add this new function to create shadcn component variants with custom styles
export function createVariant(baseClassName: string, variantName: string, styles: Record<string, string>) {
  return {
    [variantName]: {
      base: `${baseClassName} ${styles.base || ''}`,
      trigger: `${styles.trigger || ''}`,
      content: `${styles.content || ''}`,
      header: `${styles.header || ''}`,
      body: `${styles.body || ''}`,
    }
  }
}
