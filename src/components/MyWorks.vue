<template>
  <div
    :class="[
      'min-h-screen container mx-auto px-4 py-14 text-white relative transition-colors duration-500',
      activeTab === 'dev' ? 'bg-black' : 'bg-yellow',
    ]"
  >
    <div class="flex flex-col items-center mb-8">
      <h2
        :class="[
          'text-4xl font-bold text-center transition-colors duration-300',
          activeTab === 'dev' ? 'text-yellow' : 'text-black',
        ]"
      >
        MY WORKS
      </h2>
    </div>
    <MyWorksWeb v-if="activeTab === 'dev'" />
    <MyWorksGfx v-if="activeTab === 'gfx'" />

    <div
      :class="[
        'flex items-center p-1 rounded-full absolute bottom-8 right-4 transition-colors duration-500 group',
        activeTab === 'dev' ? 'bg-yellow' : 'bg-black',
      ]"
    >
      <button
        @click="activeTab = 'dev'"
        :class="[
          'flex items-center gap-1 p-1 rounded-full transition-all duration-500 ease-in-out w-16 justify-center',
          activeTab === 'dev' ? 'bg-black' : '',
        ]"
      >
        <CodeXml size="16" color="#F6E332" />
        <p class="text-sm text-yellow">Dev</p>
      </button>
      <button
        @click="activeTab = 'gfx'"
        :class="[
          'flex items-center gap-1 p-1 rounded-full transition-all duration-500 ease-in-out w-16 justify-center',
          activeTab === 'gfx' ? 'bg-yellow' : '',
        ]"
      >
        <Palette :size="16" color="#0E161E" />
        <p class="text-sm text-black">Gfx</p>
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
