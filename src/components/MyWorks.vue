<template>
  <div
    :class="[
      ' text-white relative transition-colors duration-500',
      isOnDevView ? 'bg-black' : 'bg-yellow',
    ]"
  >
    <div class="container mx-auto px-4 py-14 min-h-screen place-content-center place-items-center relative">
      <div class="flex flex-col items-center mb-8">
        <h2
          :class="[
            'text-4xl md:text-5xl font-bold text-center transition-colors duration-300 absolute top-14',
            isOnDevView ? 'text-yellow' : 'text-black',
          ]"
        >
          MY WORKS
        </h2>
      </div>
      <MyWorksWeb v-show="isOnDevView" />
      <MyWorksGfx v-show="!isOnDevView" />

      <div
        :class="[
          'flex items-center p-1 rounded-full absolute bottom-8 right-4 transition-colors duration-500 group',
          isOnDevView ? 'bg-yellow' : 'bg-black',
        ]"
      >
        <button
          @click="toggleisOnDevView"
          :class="[
            'flex items-center gap-1 p-1 rounded-full transition-all duration-500 ease-in-out w-16 justify-center',
            isOnDevView ? 'bg-black' : '',
          ]"
        >
          <CodeXml size="16" color="#F6E332" />
          <p class="text-sm text-yellow">Dev</p>
        </button>
        <button
          @click="toggleisOnDevView"
          :class="[
            'flex items-center gap-1 p-1 rounded-full transition-all duration-500 ease-in-out w-16 justify-center',
            !isOnDevView ? 'bg-yellow' : '',
          ]"
        >
          <Palette :size="16" color="#0E161E" />
          <p class="text-sm text-black">Gfx</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyWorksGfx from './MyWorksGfx.vue'
import MyWorksWeb from './MyWorksWeb.vue'
import { CodeXml, Palette } from 'lucide-vue-next'
import { debounce } from 'lodash';
import { ref } from 'vue'

const isOnDevView = ref(true)

const toggleisOnDevView = debounce(() => {
  isOnDevView.value = !isOnDevView.value
}, 200);
</script>
