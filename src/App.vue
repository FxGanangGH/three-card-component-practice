<script setup lang="ts">
import ThreeColumnPreview from "./components/ThreeColumnPreview.vue";
import { onMounted } from "vue";
import { useCarStore } from "./stores/carStore";

const data = useCarStore();

onMounted(() => {
  data.fill();
});
</script>

<template>
  <ThreeColumnPreview />
</template>
