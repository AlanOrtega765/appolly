<script setup lang="ts">
defineProps<{
  title: string;
  paragraph: {
    large: string;
    short: string;
  };
}>();
</script>

<template>
  <div class="grid grid-cols-12 px-[18px] pt-[18px] pb-[10px] mx-4 md:mx-0 shadow-effect-1 rounded-[10px] xl:w-[570px] xl:pt-[30px] xl:pb-5">
    <Icon class="text-gray w-6 h-6 mx-auto" name="ri:checkbox-circle-fill" />
    <article class="col-span-11 ml-[18px]">
      <h1 class="text-md font-semibold uppercase">{{ title }}</h1>
      <p class="lg:hidden text-gray">
        {{ paragraph.short }}
      </p>
      <p class="hidden lg:flex text-gray">
        {{ paragraph.large }}
      </p>
    </article>
  </div>
</template>
