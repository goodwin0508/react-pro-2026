import { formatPrice, slugify } from './utils'

const title = 'Годовой отчёт'

console.log(slugify(title), formatPrice(1999.5))

document.getElementById('report')?.addEventListener('click', async () => {
  const { buildReport } = await import('./report')
  console.log(buildReport(title))
})
