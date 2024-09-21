<template>
  <main
    class="grid size-full min-h-screen place-items-center bg-project-white py-10 lg:py-0"
  >
    <div
      class="grid w-10/12 max-w-sm grid-rows-3 place-items-center lg:max-w-screen-lg lg:grid-cols-3 lg:grid-rows-1"
    >
      <div
        v-for="(item, index) in data.store.cars"
        :key="index"
        class="flex size-full flex-col gap-y-7 p-12"
        :class="{
          'rounded-t-lg bg-column-1 lg:rounded-l-lg lg:rounded-tr-none': index === 0,
          'bg-column-2': index === 1,
          'rounded-b-lg bg-column-3 lg:rounded-r-lg lg:rounded-bl-none': index === 2,
        }"
      >
        <img
          class="h-10 w-16"
          :alt="`${item.name}`"
          :src="`/images/icon-${item.name}.svg`"
        />
        <h1
          class="font-big-shoulder text-column-title font-semibold uppercase text-column-general md:text-column-title-md"
        >
          {{ item.name }}
        </h1>
        <p
          class="font-lexend text-column-small-content text-column-general/60 md:text-base xl:leading-7"
        >
          {{ item.details }}
        </p>
        <span
          class="w-max rounded-full border-2 border-white bg-white px-6 py-2 font-lexend text-column-small-content font-semibold capitalize hover:bg-transparent hover:text-white md:text-base lg:mt-16 lg:px-10 lg:py-3"
          :class="{
            'text-column-1': index === 0,
            'text-column-2': index === 1,
            'text-column-3': index === 2,
          }"
        >
          learn more
        </span>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useCarStore } from "@/stores/carStore";

const data = useCarStore();
</script>
