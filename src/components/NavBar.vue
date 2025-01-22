<template>
  <div class="flex justify-between items-center">
    <img src="@/assets/jj_logo.webp" alt="JJ Logo" class="h-10" />
    <div>
      <Menu :size="40" color="#ffffff" @click="isDrawerVisible = true" class="cursor-pointer" />
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
