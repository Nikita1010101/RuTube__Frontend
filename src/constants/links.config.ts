export const LINKS = {
  home: '/',
  profile: '/profile',
  subscriptions: (slug: string = '') => `/subscriptions${slug && '/'}${slug}`,
  trending: '/trending',
  video: (slug: string) => `/video${slug && '/'}${slug}`,
}
