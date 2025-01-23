<template>
  <div class="bg-black text-white">
    <div class="container mx-auto px-4 py-14">
      <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center text-yellow">MY SKILLS</h2>

      <div class="space-y-16 mb-8">
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
    </div>
  </div>
</template>

<script setup>
const webSkills = ['Laravel', 'VueJS', 'MySQL', 'TailwindCSS', 'Javascript', 'PHP', 'HTML', 'CSS']

const designSkills = ['Figma', 'Adobe XD', 'Adobe Photoshop', 'Canva']
</script>
