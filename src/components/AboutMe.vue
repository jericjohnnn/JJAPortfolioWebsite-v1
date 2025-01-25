<template>
  <div class="h-screen w-full">
    <VueFlicking
      ref="flicking"
      :options="{ circular: true, disableOnInit: true }"
      class="w-full h-full"
    >
      <div key="1" class="w-full h-full bg-white">
        <div class="h-full flex gap-16 items-center justify-center px-4 py-14 lg:px-8 xl:px-12">
          <div class="w-[420px]">
            <div class="h-full w-full aspect-square overflow-hidden rounded-3xl">
              <img
                src="@/assets/about_me_img.webp"
                alt="Hero image"
                class="h-full w-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div class="flex flex-col justify-start w-[400px] gap-10 items-start">
            <h2 class="text-4xl md:text-5xl font-bold text-black">ABOUT ME</h2>
            <p class="text-left">
              Learn more about me, my work, and my current skills, with a focus on programming and
              technologies.
            </p>
            <Button
              @click="goToNext"
              label="Show More"
              rounded
              pt:root="!text-black !border-yellow !bg-yellow hover:!bg-black hover:!text-yellow h-fit !px-6 !w-auto"
            />
          </div>
        </div>
      </div>
      <div key="2" class="w-full h-full bg-white">
        <GetToKnowMe @nextAction="goToNext" />
      </div>
      <div key="3" class="w-full h-full bg-white">
        <MySkills @nextAction="goToNext" />
      </div>
    </VueFlicking>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GetToKnowMe from './GetToKnowMe.vue'
import MySkills from './MySkills.vue'
import { Button } from 'primevue'
const flicking = ref(null)

const goToNext = () => {
  if (flicking.value) {
    flicking.value.next().catch(() => {
      // Catch boundary error if at the end (non-circular Flicking)
    })
  }
}
</script>
