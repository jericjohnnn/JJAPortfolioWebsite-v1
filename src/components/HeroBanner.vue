<template>
  <div class="relative">
    <img
      src="@/assets/hero_bg.svg"
      alt="Hero Background"
      class="absolute w-full h-full -z-10 object-cover object-left"
    />
    <div class="min-h-screen flex flex-col gap-10 justify-between container mx-auto p-4 lg:p-8 xl:px-12">
      <NavBar @selectedSection="emitSelectedSection" />
      <div class="flex flex-wrap items-center justify-center gap-16">
        <div class="space-y-4 text-center lg:w-96 lg:text-left">
          <h1 class="text-5xl md:text-6xl font-bold text-yellow leading-tight">JERIC JOHN ALIGATO</h1>
          <p class="text-lg md:text-xl leading-normal text-white">
            Turning Ideas into Code, and Hobbies into Art
          </p>
        </div>
        <img src="@/assets/hero_image.webp" alt="Hero image" class="w-5/6 md:w-4/6 lg:w-96" />
      </div>
      <div class="flex justify-center pb-6">
        <ChevronsDown
          :size="48"
          :stroke-width="1.5"
          class="text-yellow animate-bounce cursor-pointer"
          @click="emitSelectedSection('about')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronsDown } from 'lucide-vue-next'
import NavBar from './NavBar.vue'

const emit = defineEmits(['selectedSection'])
const emitSelectedSection = (section) => {
  emit('selectedSection', section)
}
</script>
