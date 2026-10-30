export function formatPrice(value: number): string {
  return `${value.toFixed(2)} ₽`
}

export function slugify(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '-')
}

export function unusedSum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0)
}

export function unusedShuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5)
}
