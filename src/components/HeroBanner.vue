<template>
  <div class="relative min-h-screen">
    <img
      src="@/assets/hero_bg.svg"
      alt="Hero Background"
      class="absolute w-full h-full -z-10 object-cover"
    />
    <div class="container mx-auto p-4">
      <NavBar />
      <div class="flex flex-wrap items-center justify-center gap-16 pt-20 pb-16">
        <div class="space-y-4 text-center">
          <h1 class="text-5xl font-bold text-yellow leading-tight">JERIC JOHN ALIGATO</h1>
          <p class="text-lg leading-normal text-white">
            Turning Ideas into Code, and Hobbies into Art
          </p>
        </div>
        <img src="@/assets/hero_image.webp" alt="Hero image" class="h-80" />
      </div>
      <div class="flex justify-center pb-6">
        <ChevronsDown
          :size="48"
          :stroke-width="1.5"
          class="text-yellow animate-bounce cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronsDown } from 'lucide-vue-next'
import NavBar from './NavBar.vue'
</script>
