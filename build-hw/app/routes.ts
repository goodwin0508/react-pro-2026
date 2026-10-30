export const routes = {
  home: () => import('./pages/home'),
  about: () => import('./pages/about'),
}

export type RouteName = keyof typeof routes

export async function openRoute(name: RouteName): Promise<string> {
  const page = await routes[name]()
  return page.render()
}
