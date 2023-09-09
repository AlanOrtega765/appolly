<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  imageUrl: string;
}>();
</script>

<template>
  <div class="rounded-[10px] shadow-effect-1 pb-[30px]">
    <nuxt-img
      class="rounded-t-[10px] drop-shadow-effect-1 object-cover w-full"
      :src="imageUrl"
      format="webp"
    />
    <article class="grid grid-rows-3 place-items-start mt-[30px] px-[14px] xl:px-6 xl:mt-[40px]">
      <h1 class="text-md font-semibold uppercase">
        {{ title }}
      </h1>
      <p class="text-gray mt-[18px]">
        {{ description }}
      </p>
      <button
        class="mt-5 text-royal-blue uppercase text-md font-semibold self-end underline underline-offset-4"
      >
        Read more
      </button>
    </article>
  </div>
</template>
