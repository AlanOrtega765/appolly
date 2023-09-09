<script setup lang="ts">
defineProps<{
  imageUrl: string;
  name: string;
  role: string;
  description: {
    large: string;
    short: string;
  };
}>();
</script>

<template>
  <div class="shadow-effect-1 rounded-[10px] pt-[30px] pb-[53px] px-[18px]">
    <div class="relative w-fit mx-auto">
      <VectorsCircleVector class="md:w-[178px] md:h-[178px] lg:w-[220px] lg:h-[220px]"/>
      <nuxt-img
        class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-[160px] md:h-[160px] lg:w-[198px] lg:h-[198px]"
        :src="imageUrl"
        format="webp"
      />
    </div>
    <div class="text-center mt-16">
      <h1 class="text-xl font-bold uppercase md:text-md md:font-semibold xl:text-xl xl:font-bold">
        {{ name }}
      </h1>
      <span
        class="text-gray text-md uppercase font-semibold md:text-base md:font-normal xl:text-md xl:font-semibold"
        >{{ role }}</span
      >
      <p class="md:hidden xl:flex w-[313px] text-center text-gray mx-auto mt-[14px]">
        {{ description.large }}
      </p>
      <p class="hidden md:flex xl:hidden w-[158px] text-center text-gray mx-auto mt-[14px]">
        {{ description.short }}
      </p>
    </div>
    <ul class="flex justify-center h-6 mt-[30px]">
      <li class="flex">
        <Icon class="text-black" name="ri:facebook-fill" size="24" />
        <div class="w-[1px] h-full bg-gray ml-8 md:ml-[14px] xl:ml-[30px]"></div>
      </li>
      <li class="flex">
        <Icon class="text-black ml-8 md:ml-[14px] xl:ml-[30px]" name="ri:instagram-fill" size="24" />
        <div class="w-[1px] h-full bg-gray ml-8 md:ml-[14px] xl:ml-[30px]"></div>
      </li>
      <li class="flex">
        <Icon class="text-black ml-8 md:ml-[14px] xl:ml-[30px]" name="ri:twitter-fill" size="24" />
        <div class="w-[1px] h-full bg-gray ml-8 md:ml-[14px] xl:ml-[30px]"></div>
      </li>
      <li>
        <Icon class="text-black ml-8 md:ml-[14px] xl:ml-[30px]" name="ri:youtube-fill" size="24" />
      </li>
    </ul>
  </div>
</template>
