<template>
  <div class="h-full lg:h-screen bg-black text-white">
    <div class="h-full flex flex-col justify-between gap-14 container mx-auto px-4 py-14 lg:px-8 xl:px-12">
      <div class="flex justify-center lg:justify-between">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-yellow">MY SKILLS</h2>
        <div class="hidden lg:block">
          <Button
            @click="emitNextAction"
            label="Return →"
            variant="outlined"
            rounded
            pt:root="!text-yellow !border-yellow hover:!bg-yellow hover:!text-black h-fit !px-6"
          />
        </div>
      </div>

      <div class="space-y-16 ">
        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-6">Web Development</h3>
          <div class="flex flex-wrap gap-3 justify-center items-center">
            <span
              v-for="skill in webSkills"
              :key="skill"
              class="px-4 py-2 bg-yellow rounded-full text-black"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-6">UI/UX | Graphic Design</h3>
          <div class="flex flex-wrap gap-3 justify-center items-center">
            <span
              v-for="skill in designSkills"
              :key="skill"
              class="px-4 py-2 bg-yellow rounded-full text-black"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
      <div class="hidden lg:block">
        <img src="@/assets/my_skills_img.svg" alt="My skills image" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from 'primevue'

import { Button } from 'primevue'

const webSkills = ['Laravel', 'VueJS', 'MySQL', 'TailwindCSS', 'Javascript', 'PHP', 'HTML', 'CSS']
const designSkills = ['Figma', 'Adobe XD', 'Adobe Photoshop', 'Canva']

const emit = defineEmits(['nextAction'])
const emitNextAction = () => {
  emit('nextAction')
}

const emit = defineEmits(['nextAction'])
const emitNextAction = () => {
  emit('nextAction')
}
</script>
