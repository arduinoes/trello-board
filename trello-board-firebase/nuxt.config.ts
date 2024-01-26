// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/agenda/', // baseURL: '/<repositorio>/'
    buildAssetsDir: 'assets', // No uses guiones bajos "_" al inicio de carpetas
  },
  modules:["@nuxtjs/tailwindcss", "@vueuse/nuxt", '@pinia/nuxt',],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  ssr: false,
  
  devtools: { enabled: true }
})
