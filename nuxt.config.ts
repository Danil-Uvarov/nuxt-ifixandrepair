// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: false,
  imports: {
    autoImport: false,
  },
  css: ['~/assets/css/style.css'],
  devtools: { enabled: true },

});
