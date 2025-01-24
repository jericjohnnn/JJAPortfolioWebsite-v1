<template>
  <div class="relative h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
    <!-- Flicking Carousel -->
    <FlicKing
      ref="flicking"
      :circular="true"
      :bound="true"
      :moveType="{ type: 'snap', count: 1 }"
      :draggable="false"
      class="w-full h-full"
    >
      <!-- Full-screen cards -->
      <div class="w-full h-full flex items-center justify-center bg-red-500 text-white text-4xl font-bold">
        Card 1
      </div>
      <div class="w-full h-full flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
        Card 2
      </div>
      <div class="w-full h-full flex items-center justify-center bg-green-500 text-white text-4xl font-bold">
        Card 3
      </div>
    </FlicKing>

    <!-- Next Button -->
    <button
      @click="goToNext"
      class="absolute bottom-8 right-8 px-6 py-3 z-50 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const flicking = ref(null);

const goToNext = () => {
  if (flicking.value) {
    flicking.value.next().catch(() => {
      // Catch boundary error if at the end (non-circular Flicking)
    });
  }
};
</script>
