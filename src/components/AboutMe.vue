<template>
  <div class="h-screen w-full">
    <!-- Flicking Carousel -->
    <VueFlicking
      ref="flicking"
      :options="{ circular: true, disableOnInit: true }"
      class="w-full h-full"
    >
      <!-- Full-screen cards -->
      <div
        key="1"
        class="w-full h-full bg-red-500 text-white text-4xl font-bold"
      >
      <GetToKnowMe />
      </div>
      <div
        key="2"
        class="w-full h-full bg-blue-500 text-white text-4xl font-bold"
      >
      <MySkills />
      </div>
      <div
        key="3"
        class="w-full h-full bg-green-500 text-white text-4xl font-bold"
      >
        Card 3
      </div>
    </VueFlicking>

    <!-- Next Button -->
    <button
      @click="goToNext"
      class="bottom-8 right-8 px-6 py-3 z-50 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GetToKnowMe from './GetToKnowMe.vue'
import MySkills from './MySkills.vue'
const flicking = ref(null)

const goToNext = () => {
  if (flicking.value) {
    flicking.value.next().catch(() => {
      // Catch boundary error if at the end (non-circular Flicking)
    })
  }
}
</script>
