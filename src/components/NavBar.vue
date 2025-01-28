<template>
  <div class="flex justify-between items-center">
    <img src="@/assets/jj_logo.webp" alt="JJ Logo" class="h-10" />
    <div class="hidden lg:flex gap-16 text-lg text-white">
      <a @click="emitSelectedSection('about')" class="cursor-pointer relative group">
        ABOUT ME
        <span
          class="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"
        >
        </span>
      </a>
      <a @click="emitSelectedSection('works')" class="cursor-pointer relative group">
        MY WORKS
        <span
          class="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"
        >
        </span>
      </a>
      <a @click="emitSelectedSection('contact')" class="cursor-pointer relative group">
        CONTACT
        <span
          class="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"
        >
        </span>
      </a>
    </div>

    <div class="lg:hidden">
      <Menu :size="40" color="#ffffff" @click="isDrawerVisible = true" />
      <Drawer
        v-model:visible="isDrawerVisible"
        position="full"
        pt:header="!justify-end !p-4"
        pt:content="!px-4"
      >
        <div class="flex flex-col justify-center items-center gap-20 text-4xl font-semibold py-16">
          <a @click="emitSelectedSection('about')">ABOUT ME</a>
          <a @click="emitSelectedSection('works')">MY WORKS</a>
          <a @click="emitSelectedSection('contact')">CONTACT</a>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script setup>
import { Drawer } from 'primevue'
import { Menu } from 'lucide-vue-next'
import { ref } from 'vue'

const isDrawerVisible = ref(false)
const emit = defineEmits(['selectedSection'])

const emitSelectedSection = (section) => {
  isDrawerVisible.value = false
  emit('selectedSection', section)
}
</script>
