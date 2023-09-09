<script setup>
const links = ref(['Home', 'About', 'Features', 'Screenshot', 'Blog']);
const isOpen = ref(false);
</script>

<template>
  <header
    class="absolute z-20 left-1/2 top-10 md:top-[85px] -translate-x-1/2 bg-just-white flex items-center justify-between h-10 md:h-[60px] w-[90%] xl:w-[80%] py-[3px] md:py-[5px] pl-[9px] md:pl-[18px] pr-[3px] md:pr-[5px] rounded-[3px] drop-shadow-effect-1"
  >
    <nav v-if="isOpen" class="absolute z-20 top-0 left-0 bg-just-white w-[260px] shadow-xl rounded-[10px] pt-[25px] pb-10 px-[25px]">
      <button @click="isOpen = false" class="bg-royal-blue w-[35px] h-[35px] rounded-full ml-auto block">
        <Icon class="text-just-white" name="ri:close-fill" size="24"/>
      </button>
      <ul class="flex flex-col gap-y-6 mt-2">
        <li v-for="(link, index) in links" :key="index" class="uppercase text-md font-semibold">{{ link }}</li>
      </ul>
    </nav>
    <Icon class="text-black" name="ri:menu-fill" size="24" @click="isOpen = true" />
    <div
      class="absolute left-1/2 -translate-x-1/2 drop-shadow-effect-1 py-6 md:py-8 px-3 md:px-4 bg-just-white rounded-[5px]"
    >
      <nuxt-img class="w-[80px] md:w-[167px]" src="/img/logo.png" format="webp"/>
    </div>
    <button
      class="bg-royal-blue text-just-white uppercase font-semibold text-xs md:text-md h-full px-[6px] md:px-4 rounded-[3px]"
    >
      Download
    </button>
  </header>
</template>
