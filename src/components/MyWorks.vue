<template>
  <div class="bg-black min-h-screen container mx-auto px-4 py-14 text-white relative">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-4xl font-bold text-center text-yellow">MY WORKS</h2>
    </div>
    <MyWorksWeb v-if="activeTab === 'dev'" />
    <MyWorksGfx v-if="activeTab === 'gfx'" />

    <div class="flex items-center gap-2 p-1 bg-yellow rounded-full absolute bottom-8 right-8">
      <button
        @click="activeTab = 'dev'"
        :class="[
          'flex items-center gap-1 px-2 py-1 rounded-full transition-colors',
          activeTab === 'dev' ? 'bg-black' : '',
        ]"
      >
        <CodeXml size="16" :color="activeTab === 'dev' ? '#FFF' : '#0E161E'" />
        <p class="text-sm" :class="activeTab === 'dev' ? 'text-white' : 'text-black'">Dev</p>
      </button>
      <button
        @click="activeTab = 'gfx'"
        :class="[
          'flex items-center gap-1 px-2 py-1 rounded-full transition-colors',
          activeTab === 'gfx' ? 'bg-black' : '',
        ]"
      >
        <Palette :size="16" :color="activeTab === 'gfx' ? '#FFF' : '#0E161E'" />
        <p class="text-sm" :class="activeTab === 'gfx' ? 'text-white' : 'text-black'">Gfx</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import MyWorksGfx from './MyWorksGfx.vue'
import MyWorksWeb from './MyWorksWeb.vue'
import { CodeXml, Palette } from 'lucide-vue-next'
import { ref } from 'vue'

const activeTab = ref('dev')
</script>
