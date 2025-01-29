<template>
  <div class="h-full lg:h-screen bg-black text-white">
    <div
      class="h-full flex flex-col justify-between gap-14 container mx-auto px-4 py-14 lg:px-8 xl:px-12"
    >
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

      <div class="space-y-16">
        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-6">Web Development</h3>
          <div class="flex flex-wrap gap-3 justify-center items-center">
            <span v-for="skill in webSkills" :key="skill">
              <img :src="skill" alt="My skills image" class="h-14 w-full" />
            </span>
          </div>
        </div>

        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-6">UI/UX | Graphic Design</h3>
          <div class="flex flex-wrap gap-3 justify-center items-center">
            <span v-for="skill in designSkills" :key="skill">
              <img :src="skill" alt="My skills image" class="h-14 w-full" />
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

const webSkills = [
  'https://skillicons.dev/icons?i=laravel',
  'https://skillicons.dev/icons?i=vue',
  'https://skillicons.dev/icons?i=mysql',
  'https://skillicons.dev/icons?i=tailwind',
  'https://skillicons.dev/icons?i=js',
  'https://skillicons.dev/icons?i=php',
  'https://skillicons.dev/icons?i=html',
  'https://skillicons.dev/icons?i=css',
  'https://skillicons.dev/icons?i=postman',
  'https://skillicons.dev/icons?i=git',
  'https://skillicons.dev/icons?i=github',
]
const designSkills = [
  'https://skillicons.dev/icons?i=figma',
  'https://skillicons.dev/icons?i=xd',
  'https://skillicons.dev/icons?i=ps',
]

const emit = defineEmits(['nextAction'])
const emitNextAction = () => {
  emit('nextAction')
}
</script>
