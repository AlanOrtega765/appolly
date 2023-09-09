<script setup lang="ts">
import IconsComment from '@/components/icons/Comment.vue';
import IconsBrowser from '@/components/icons/Browser.vue';
import IconsVector from '@/components/icons/Vector.vue';
import IconsMobile from '@/components/icons/Mobile.vue';
import IconsEyeScanner from '@/components/icons/EyeScanner.vue';
import IconsMaleTeleMarketer from '@/components/icons/MaleTeleMarketer.vue';

const swiperMockupRef = ref();

const mockupsSwiperBreakpoints = ref({
  768: {
    slidesPerView: 2,
    loop: true,
    coverflowEffect: {
      slideShadows: false,
      stretch: 130,
      rotate: 0,
      scale: 1,
    },
  },
  1024: {
    slidesPerView: 2,
    coverflowEffect: {
      slideShadows: false,
      stretch: 150,
      rotate: 0,
    },
    allowTouchMove: false,
  },
  1440: {
    slidesPerView: 2,
    coverflowEffect: {
      slideShadows: false,
      stretch: 300,
      rotate: 0,
    },
    allowTouchMove: false,
  },
  2560: {
    slidesPerView: 2,
    coverflowEffect: {
      slideShadows: false,
      stretch: 800,
      rotate: 0,
    },
    allowTouchMove: false,
  },
});
const customersSwiperBreakpoints = ref({
  768: {
    slidesPerView: 1.1,
    coverflowEffect: {
      slideShadows: false,
      stretch: 500,
      rotate: 0,
    },
  },
  1024: {
    slidesPerView: 1.5,
    coverflowEffect: {
      slideShadows: false,
      stretch: 400,
      rotate: 0,
    },
  },
  1440: {
    slidesPerView: 1.5,
    coverflowEffect: {
      slideShadows: false,
      stretch: 500,
      rotate: 0,
    },
  },
  2560: {
    slidesPerView: 1.5,
    coverflowEffect: {
      slideShadows: false,
      stretch: 1200,
      rotate: 0,
    },
  },
});

const slidePrev = () => swiperMockupRef.value.$el.swiper.slidePrev();
const slideNext = () => swiperMockupRef.value.$el.swiper.slideNext();
</script>

<template>
  <div>
    <LayoutAppHeader />
    <section
      class="flex flex-col md:flex-row md:justify-around xl:justify-evenly items-center bg-pattern bg-cover bg-center bg-no-repeat pt-[188px] md:pt-[350px] pb-[120px] md:pb-[250px] lg:pt-[250px] lg:pb-[200px] xl:pt-[321px] xl:pb-[168px]"
    >
      <div
        class="absolute hidden md:flex justify-between top-0 w-[90%] xl:w-[80%] mt-[25px] text-just-white"
      >
        <div class="flex items-center gap-x-12">
          <div class="flex items-center gap-x-[18px]">
            <Icon name="ri:mail-fill" size="18" />
            <span>info@youremail.com</span>
          </div>
          <div class="flex items-center gap-x-[18px]">
            <Icon name="ri:phone-fill" size="18" />
            <span>(480) 555-0103</span>
          </div>
        </div>
        <ul class="flex">
          <li>
            <Icon name="ri:facebook-fill" size="18" />
          </li>
          <li>
            <Icon class="ml-8" name="ri:instagram-fill" size="18" />
          </li>
          <li>
            <Icon class="ml-8" name="ri:twitter-fill" size="18" />
          </li>
          <li>
            <Icon class="ml-8" name="ri:youtube-fill" size="18" />
          </li>
        </ul>
      </div>
      <div class="relative inline-block max-h-[318px] xl:max-h-[450px] pr-5">
        <article
          class="relative z-10 pl-[18px] pt-6 pb-5 pr-3 xl:pl-[30px] bg-just-white w-[323px] h-[318px] xl:w-[570px] xl:h-[432px]"
        >
          <h1
            class="text-lg text-royal-blue font-semibold uppercase xl:text-3xl"
          >
            A Great App Makes Your Life Better
          </h1>
          <p class="xl:hidden mt-[18px] text-gray">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <p class="hidden xl:flex mt-[18px] text-gray w-[487px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <h2 class="mt-[30px] text-md font-semibold uppercase xl:text-lg">
            Download App Now
          </h2>
          <div class="flex gap-x-[10px] mt-[18px]">
            <button>
              <nuxt-img
                class="xl:w-[150px]"
                format="webp"
                src="/img/google-play.png"
              />
            </button>
            <button>
              <nuxt-img
                class="xl:w-[150px]"
                format="webp"
                src="/img/app-store.png"
              />
            </button>
          </div>
        </article>
        <nuxt-img
          class="relative -top-[338px] xl:-top-[480px] left-5 xl:left-12 xl:w-[570px] xl:h-[535px]"
          format="webp"
          src="/img/rectangle.png"
        />
      </div>
      <nuxt-img
        class="mt-14 mx-auto md:mx-0 md:mt-0 md:w-[200px] lg:w-[250px] xl:w-[354px]"
        format="webp"
        src="/img/mobile-app-mockup.png"
      />
    </section>
    <section
      class="pt-[60px] md:pt-[120px] pb-[92px] md:pb-[160px] md:px-10 lg:px-20 xl:w-[90%] xl:mx-auto"
    >
      <h1
        class="text-lg md:text-xl md:font-bold uppercase font-semibold text-center"
      >
        About Our App
      </h1>
      <p class="md:hidden text-gray text-center w-[80%] mx-auto mt-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <p
        class="hidden md:flex xl:hidden text-gray text-center w-[450px] mx-auto mt-[18px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus.
      </p>
      <p
        class="hidden xl:flex text-gray text-center w-[600px] mx-auto mt-[18px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <div
        class="flex flex-col justify-between 2xl:justify-evenly items-center md:gap-x-[60px] md:flex-row mt-10 md:mt-[60px]"
      >
        <nuxt-img
          class="w-[238px] h-[359px] lg:h-[400px] xl:h-[526px] xl:w-[386px]"
          format="webp"
          src="/img/android-smartphone-mockups.png"
        />
        <ul class="flex flex-col gap-5 mt-10 md:mt-0">
          <li>
            <AboutCard
              :title="'Creative Design'"
              :paragraph="{
                large:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.',
                short:
                  'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.',
              }"
            />
          </li>
          <li>
            <AboutCard
              :title="'Easy To Use'"
              :paragraph="{
                large:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.',
                short:
                  'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.',
              }"
            />
          </li>
          <li>
            <AboutCard
              :title="'Best User Experience'"
              :paragraph="{
                large:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.',
                short:
                  'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.',
              }"
            />
          </li>
        </ul>
      </div>
    </section>
    <section
      class="bg-pattern bg-cover bg-center bg-no-repeat text-just-white py-[60px] md:py-[120px]"
    >
      <h1
        class="text-lg md:text-xl md:font-bold font-semibold uppercase text-center"
      >
        App Features
      </h1>
      <p class="md:hidden text-center w-[80%] mx-auto mt-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <p
        class="hidden md:flex xl:hidden text-center w-[450px] mx-auto mt-[18px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus.
      </p>
      <p class="hidden xl:flex text-center w-[600px] mx-auto mt-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <div class="mt-8 md:mt-[60px]">
        <FeatureDetail
          :icon="IconsComment"
          :title="'Full Free Chat'"
          :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 items-center md:mt-[60px]">
          <div
            class="flex flex-col md:h-full xl:justify-between pt-10 xl:pb-10"
          >
            <FeatureDetail
              class="md:text-end md:items-end md:mr-0"
              :icon="IconsBrowser"
              :title="'Unlimiter Features'"
              :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
            />
            <FeatureDetail
              class="md:mt-[70px] md:text-end md:items-end md:mr-0"
              :icon="IconsVector"
              :title="'Awesome Ui Design'"
              :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
            />
          </div>
          <nuxt-img
            class="mx-auto mt-[60px] md:mt-0 shadow-effect-3 rounded-[25px] w-[214px] xl:w-[375px]"
            format="webp"
            src="/img/app-mockup.png"
          />
          <div
            class="flex flex-col md:h-full xl:justify-between mt-[120px] md:mt-0 md:pt-10 xl:pb-10"
          >
            <FeatureDetail
              class="md:text-start md:items-start md:ml-0"
              :icon="IconsMobile"
              :title="'IOS And Android Version'"
              :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
            />
            <FeatureDetail
              class="md:text-start md:items-start md:ml-0"
              :icon="IconsEyeScanner"
              :title="'Retina Ready Graphics'"
              :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
            />
          </div>
        </div>
        <FeatureDetail
          class="w-[297px] md:w-[320px]"
          :icon="IconsMaleTeleMarketer"
          :title="'24/7 Support By Real People'"
          :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
        />
      </div>
    </section>
    <section class="py-[60px] md:py-[120px]">
      <div class="lg:px-[188px]">
        <h1
          class="text-lg md:text-xl md:font-bold uppercase font-semibold text-center"
        >
          Checkout Our <br class="md:hidden" />
          App Interface Look
        </h1>
        <p class="md:hidden mt-[18px] text-gray text-center w-[300px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae.
        </p>
        <p
          class="hidden md:flex mt-[18px] text-gray text-center w-[450px] mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus.
        </p>
        <div class="relative">
          <Swiper
            ref="swiperMockupRef"
            class="mt-10 h-[450px] md:h-[550px] xl:h-[750px]"
            :modules="[SwiperPagination, SwiperEffectCoverflow]"
            :slides-per-view="2"
            :centered-slides="true"
            :loop="true"
            :pagination="{
              bulletClass: 'swiper-pagination-bullet bullet-team',
              bulletActiveClass:
                'swiper-pagination-bullet-active bullet-team-active',
              type: 'bullets',
            }"
            :breakpoints="mockupsSwiperBreakpoints"
            :effect="'coverflow'"
            :coverflow-effect="{
              slideShadows: false,
              stretch: 0,
              rotate: 0,
              scale: 1,
            }"
          >
            <SwiperSlide v-for="i in 5" :key="i">
              <nuxt-img
                class="drop-shadow-lg mx-auto w-[164px] h-[354px] md:w-[227px] md:h-[444px] xl:w-[320px] xl:h-[622px]"
                :src="`/img/slider/mockup-${i}.png`"
                format="webp"
              />
            </SwiperSlide>
          </Swiper>
          <button
            @click="slidePrev"
            class="hidden lg:flex absolute lg:w-[70px] lg:h-[70px] xl:w-[84px] xl:h-[84px] items-center justify-center top-1/2 -translate-y-[80px] xl:-translate-y-[90px] -left-[140px] xl:-left-[150px] z-20 text-gray border border-gray active:bg-gray active:text-just-white rounded-full shadow-effect-1"
          >
            <Icon name="ri:arrow-left-s-line" size="50" />
          </button>
          <button
            @click="slideNext"
            class="hidden lg:flex lg:w-[70px] lg:h-[70px] xl:w-[84px] xl:h-[84px] items-center justify-center absolute top-1/2 -translate-y-[80px] xl:-translate-y-[90px] -right-[140px] xl:-right-[150px] z-20 border border-gray active:bg-gray active:text-just-white rounded-full shadow-effect-1 text-gray"
          >
            <Icon name="ri:arrow-right-s-line" size="50" />
          </button>
        </div>
      </div>
      <article
        class="mt-[60px] md:mt-[120px] px-4 md:px-10 xl:w-[90%] xl:mx-auto"
      >
        <div class="grid md:grid-cols-2 md:gap-x-7">
          <div>
            <h1
              class="text-lg md:text-xl md:font-bold md:w-[288px] font-semibold w-[250px] uppercase"
            >
              Download App Now
            </h1>
            <p class="xl:hidden text-gray mt-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <p class="hidden xl:flex text-gray mt-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
            <div class="flex gap-x-6 mt-10">
              <button>
                <nuxt-img
                  class="w-[150px]"
                  format="webp"
                  src="/img/google-play.png"
                />
              </button>
              <button>
                <nuxt-img
                  class="w-[150px]"
                  format="webp"
                  src="/img/app-store.png"
                />
              </button>
            </div>
            <ul class="grid grid-cols-3 gap-x-[18px] text-just-white mt-[60px]">
              <li
                class="flex flex-col gap-y-2 xl:gap-y-[18px] text-center bg-royal-blue rounded-[5px] py-3 px-4"
              >
                <Icon
                  class="mx-auto w-[18px] h-[18px] xl:w-[36px] xl:h-[36px]"
                  name="ri:download-2-fill"
                />
                <span class="text-md font-semibold">59865</span>
                <h2 class="xl:uppercase xl:text-md">Downloads</h2>
              </li>
              <li
                class="flex flex-col gap-y-2 xl:gap-y-[18px] text-center bg-royal-blue rounded-[5px] py-3 px-4"
              >
                <Icon
                  class="mx-auto w-[18px] h-[18px] xl:w-[36px] xl:h-[36px]"
                  name="ri:thumb-up-fill"
                />
                <span class="text-md font-semibold">29852</span>
                <h2 class="xl:uppercase xl:text-md">Likes</h2>
              </li>
              <li
                class="flex flex-col gap-y-2 xl:gap-y-[18px] text-center bg-royal-blue rounded-[5px] py-3 px-4"
              >
                <Icon
                  class="mx-auto w-[18px] h-[18px] xl:w-[36px] xl:h-[36px]"
                  name="ri:star-fill"
                />
                <span class="text-md font-semibold">1500</span>
                <h2 class="xl:uppercase xl:text-md">Ratings</h2>
              </li>
            </ul>
          </div>
          <nuxt-img
            class="mt-[60px] md:mt-0 mx-auto xl:w-[516px]"
            src="/img/two-mobiles-mockup.png"
            format="webp"
          />
        </div>
      </article>
    </section>
    <section class="pb-[60px] md:pb-[120px]">
      <div
        class="relative text-just-white text-center bg-pattern bg-cover bg-center bg-no-repeat pt-[60px] pb-[116px] md:pb-[176px] xl:pb-[220px]"
      >
        <h1
          class="text-lg md:text-xl md:font-bold font-semibold uppercase w-[281px] md:w-[357px] mx-auto"
        >
          How to use the app perfectly
        </h1>
        <p class="md:hidden mt-10 w-[300px] mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae.
        </p>
        <p
          class="hidden md:flex xl:hidden w-[450px] mx-auto text-center mt-[18px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus.
        </p>
        <p class="hidden xl:flex w-[600px] mx-auto text-center mt-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <div
          class="absolute -bottom-[75px] md:-bottom-[115px] xl:-bottom-[160px] left-1/2 -translate-x-1/2 shadow-2xl rounded-[10px]"
        >
          <nuxt-img
            class="min-w-[343px] md:min-w-[570px] md:h-[230px] xl:min-w-[770px] xl:h-[320px] h-[150px] rounded-[10px]"
            src="/img/video-image.png"
            format="webp"
          />
          <div
            class="absolute top-0 left-0 w-full h-full bg-royal-blue/40 flex items-center justify-center rounded-[10px]"
          >
            <IconsPlayVideo />
          </div>
        </div>
      </div>
      <div class="mt-[134px] md:mt-[254px]">
        <h1
          class="text-lg md:text-xl md:font-bold font-semibold uppercase text-center"
        >
          Our creative team
        </h1>
        <p class="md:hidden text-gray w-[300px] text-center mx-auto mt-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae.
        </p>
        <p
          class="hidden md:flex xl:hidden text-gray w-[450px] text-center mx-auto mt-[18px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus.
        </p>
        <p
          class="hidden xl:flex text-gray w-[600px] text-center mx-auto mt-[18px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <ul
          class="flex flex-col gap-y-[30px] mt-10 lg:mt-[60px] px-4 md:flex-row md:justify-center md:gap-x-6"
        >
          <li>
            <TeamCard
              :image-url="'/img/team/profile-1.png'"
              :name="'Carla Press'"
              :role="'App Developer'"
              :description="{
                large:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nuncante velit vitae. Est tellus vitae.',
                short:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              }"
            />
          </li>
          <li>
            <TeamCard
              :image-url="'/img/team/profile-2.png'"
              :name="'Craig Gouse'"
              :role="'UI/UX Designer'"
              :description="{
                large:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nuncante velit vitae. Est tellus vitae.',
                short:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              }"
            />
          </li>
          <li>
            <TeamCard
              :image-url="'/img/team/profile-3.png'"
              :name="'Joselyn Septimus'"
              :role="'Website Developer'"
              :description="{
                large:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nuncante velit vitae. Est tellus vitae.',
                short:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              }"
            />
          </li>
        </ul>
      </div>
    </section>
    <section
      class="py-[60px] md:py-[120px] bg-pattern bg-no-repeat bg-center bg-cover md:px-10 lg:px-20"
    >
      <h1
        class="text-lg font-semibold uppercase text-center text-just-white md:text-xl md:font-bold"
      >
        Our happy customers
      </h1>
      <p
        class="md:hidden w-[300px] text-center mx-auto mt-[18px] text-just-white"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <p
        class="hidden md:flex xl:hidden w-[450px] text-center mx-auto mt-[18px] text-just-white"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus.
      </p>
      <p
        class="hidden xl:flex w-[600px] text-center mx-auto mt-[18px] text-just-white"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <Swiper
        class="mt-8 h-[320px] lg:h-[370px] xl:h-[420px] xl:mt-[60px]"
        :modules="[SwiperPagination, SwiperEffectCoverflow]"
        :pagination="{
          bulletClass: 'swiper-pagination-bullet bullet-customer',
          bulletActiveClass:
            'swiper-pagination-bullet-active bullet-customer-active',
          type: 'bullets',
        }"
        :slides-per-view="1.1"
        :loop="true"
        :effect="'coverflow'"
        :coverflow-effect="{
          depth: 0,
          rotate: 0,
          scale: 0.8,
          slideShadows: false,
          stretch: 300,
        }"
        :breakpoints="customersSwiperBreakpoints"
        :centered-slides="true"
        :grab-cursor="true"
      >
        <SwiperSlide v-for="i in 5" :key="i">
          <CustomerCard />
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="pt-[60px] pb-[210px] md:pt-[120px] w-[80%] mx-auto">
      <h1
        class="font-semibold text-center text-lg uppercase md:text-xl md:font-bold"
      >
        Our recent blog
      </h1>
      <p class="md:hidden mt-[18px] text-gray w-[300px] mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <p
        class="hidden md:flex xl:hidden mt-[18px] text-gray w-[450px] mx-auto text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus.
      </p>
      <p class="hidden xl:flex mt-[18px] text-gray w-[600px] mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <ul class="flex flex-col gap-y-10 px-4 mt-10 xl:mt-[60px] md:flex-row md:gap-x-6">
        <li>
          <BlogCard
            :image-url="'/img/blog/image-3.png'"
            :title="'The snap pixel: how it works and how to install'"
            :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.'"
          />
        </li>
        <li>
          <BlogCard
            :image-url="'/img/blog/image-1.png'"
            :title="'Global Partner Solutions: A Partnership of Innova'"
            :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.'"
          />
        </li>
        <li>
          <BlogCard
            :image-url="'/img/blog/image-2.png'"
            :title="'2021: An opportunity for Snapchatters to start fre'"
            :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.'"
          />
        </li>
      </ul>
    </section>
    <LayoutAppFooter />
  </div>
</template>

<style>
.swiper-pagination-bullet {
  @apply w-4 h-4;
}
.swiper-pagination-bullet-active {
  @apply ring-[1px] ring-offset-2;
}

.bullet-team {
  @apply bg-royal-blue;
}

.bullet-team-active {
  @apply ring-royal-blue;
}

.bullet-customer {
  @apply bg-just-white;
}

.bullet-customer-active {
  @apply ring-just-white ring-offset-blue;
}
</style>
