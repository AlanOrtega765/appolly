<template>
  <footer class="relative bg-black text-just-white px-4 pt-[220px] pb-7">
    <div
      class="absolute flex flex-col md:flex-row md:justify-between -top-[152px] md:-top-[83px] xl:-top-[110px] xl:w-[80%] bg-just-white py-[30px] px-[34px] xl:px-[50px] rounded-[10px] shadow-effect-2 left-1/2 -translate-x-1/2 md:w-[90%] xl:py-[57px] xl:rounded-[30px]"
    >
      <div class="md:flex md:items-center md:gap-x-[18px]">
        <div
          class="flex items-center justify-center w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] bg-royal-blue rounded-full mx-auto"
        >
          <Icon name="ri:mail-fill" class="w-5 h-5 xl:w-10 xl:h-10" />
        </div>
        <h1
          class="text-md font-semibold text-black uppercase text-center mt-5 md:text-base xl:text-lg md:text-normal md:lowercase md:mt-0"
        >
          Info.design@gmail.com
        </h1>
      </div>
      <div class="w-[117px] md:hidden h-1 bg-black mx-auto my-5"></div>
      <div class="hidden md:block w-1 h-[106px] bg-black"></div>
      <div class="md:flex md:items-center md:gap-x-[18px]">
        <div
          class="flex items-center justify-center w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] bg-royal-blue rounded-full mx-auto"
        >
          <Icon name="ri:phone-fill" class="w-5 h-5 xl:w-10 xl:h-10" />
        </div>
        <span
          class="block text-md font-semibold text-center text-black mt-5 md:text-base xl:text-lg md:text-normal md:mt-0"
          >+880 321 655 9985</span
        >
      </div>
    </div>
    <div
      class="flex flex-col md:grid md:grid-cols-3 md:gap-x-6 md:w-[90%] xl:w-[80%] md:mx-auto"
    >
      <div>
        <h1 class="text-xl font-semibold uppercase">Logo</h1>
        <p class="xl:w-[334px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim.
        </p>

        <ul class="flex mt-[38px]">
          <li class="flex">
            <Icon name="ri:facebook-fill" size="24" />
            <div class="w-[1px] h-full bg-just-white ml-8 md:ml-[18px]"></div>
          </li>
          <li class="flex">
            <Icon
              class="ml-8 md:ml-[18px]"
              name="ri:instagram-fill"
              size="24"
            />
            <div class="w-[1px] h-full bg-just-white ml-8 md:ml-[18px]"></div>
          </li>
          <li class="flex">
            <Icon class="ml-8 md:ml-[18px]" name="ri:twitter-fill" size="24" />
            <div class="w-[1px] h-full bg-just-white ml-8 md:ml-[18px]"></div>
          </li>
          <li>
            <Icon class="ml-8 md:ml-[18px]" name="ri:youtube-fill" size="24" />
          </li>
        </ul>
      </div>
      <div class="mt-[60px] md:mt-0">
        <h2 class="text-lg font-semibold uppercase">Quick Link</h2>
        <ul class="flex flex-col gap-y-3 mt-[10px]">
          <li>About</li>
          <li>Features</li>
          <li>Screenshot</li>
          <li>Blog</li>
        </ul>
      </div>
      <div class="mt-[60px] md:mt-0">
        <h2 class="text-lg font-semibold uppercase">News Letter</h2>
        <p class="mt-[10px]">
          Subscribe our newsletter to get our latest update & news
        </p>
        <div class="flex bg-just-white py-[2px] pr-[2px] rounded mt-8">
          <input
            class="text-black placeholder:text-gray p-[13px] pl-[17px] w-full outline-none md:text-sm"
            type="text"
            placeholder="Your email address"
          />
          <button class="bg-royal-blue px-[13px] rounded">
            <Icon name="ri:send-plane-2-fill" size="24" />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-[60px] border-t-[1px] border-just-white pt-5">
      <div class="flex justify-center gap-x-[18px]">
        <Icon name="ri:copyright-line" size="18" />
        <span class="text-sm font-light"
          >Copyright 2023. Ojjomedia. All Right Reserved.</span
        >
      </div>
    </div>
  </footer>
</template>
