<script setup lang="ts">
defineProps<{
    icon: object,
    title: string,
    description: string
}>();
</script>

<template>
  <article class="flex flex-col items-center text-center mt-10 first-of-type:mt-0 w-[223px] xl:w-[300px] mx-auto">
    <component class="w-[50px] h-[50px]" :is="icon"></component>
    <h2 class="mt-[30px] text-md uppercase font-semibold">{{ title }}</h2>
    <p class="mt-[18px]">
      {{ description }}
    </p>
  </article>
</template>
