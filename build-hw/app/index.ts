import { formatPrice, slugify } from './utils'
import { openRoute } from './routes'
import type { RouteName } from './routes'

const title = 'Годовой отчёт'

console.log(slugify(title), formatPrice(1999.5))

document.getElementById('report')?.addEventListener('click', async () => {
  const { buildReport } = await import('./report')
  console.log(buildReport(title))
})

document.querySelectorAll('[data-route]').forEach((element) => {
  element.addEventListener('click', async () => {
    const name = element.getAttribute('data-route') as RouteName
    console.log(await openRoute(name))
  })
})
