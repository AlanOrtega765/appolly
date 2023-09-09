// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap',
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/_ipx/f_webp/img/logo.png',
        '/_ipx/f_webp/img/android-smartphone-mockups.png',
        '/_ipx/f_webp/img/app-mockup.png',
        '/_ipx/f_webp/img/app-store.png',
        '/_ipx/f_webp/img/background.png',
        '/_ipx/f_webp/img/google-play.png',
        '/_ipx/f_webp/img/mobile-app-mockup.png',
        '/_ipx/f_webp/img/rectangle.png',
        '/_ipx/f_webp/img/two-mobiles-mockup.png',
        '/_ipx/f_webp/img/video-image.png',
        '/_ipx/f_webp/img/blog/image-1.png',
        '/_ipx/f_webp/img/blog/image-2.png',
        '/_ipx/f_webp/img/blog/image-3.png',
        '/_ipx/f_webp/img/blog/image-1.png',
        '/_ipx/f_webp/img/slider/customer-1.png',
        '/_ipx/f_webp/img/slider/mockup-1.png',
        '/_ipx/f_webp/img/slider/mockup-2.png',
        '/_ipx/f_webp/img/slider/mockup-3.png',
        '/_ipx/f_webp/img/slider/mockup-4.png',
        '/_ipx/f_webp/img/slider/mockup-5.png',
        '/_ipx/f_webp/img/team/profile-1.png',
        '/_ipx/f_webp/img/team/profile-2.png',
        '/_ipx/f_webp/img/team/profile-3.png',
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  swiper: {
    modules: ['pagination', 'effect-coverflow', 'effect-cards'],
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icon', 'nuxt-swiper'],
});
