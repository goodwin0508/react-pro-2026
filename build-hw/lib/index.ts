import { useMemo } from 'react'
import { average, sum } from './math'

export { sum, average, clamp } from './math'
export { capitalize, truncate } from './string'

export function useStats(values: number[]) {
  return useMemo(() => ({ total: sum(values), mean: average(values) }), [values])
}
