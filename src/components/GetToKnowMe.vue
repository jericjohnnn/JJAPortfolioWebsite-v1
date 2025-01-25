<template>
  <div class="bg-black text-white h-full lg:h-screen">
    <div class="h-full container flex flex-col gap-10 justify-between mx-auto px-4 py-14 lg:px-8 xl:px-12">
      <div class="flex justify-center lg:justify-between">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-yellow">GET TO KNOW ME</h2>
        <div class="hidden lg:block">
          <Button
            @click="emitNextAction"
            label="My Skills →"
            variant="outlined"
            rounded
            pt:root="!text-yellow !border-yellow hover:!bg-yellow hover:!text-black h-fit !px-6"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-10 lg:gap-16">
        <div class="space-y-6 leading-relaxed lg:leading-loose text-justify lg:w-6/12 xl:w-5/12">
          <p>
            I'm mainly a Web Developer, but I also enjoy UI/UX and Graphic Design as a hobby. I'm
            currently a graduating student pursuing a Bachelor of Science in Information Technology,
            expected to graduate in 2025.
          </p>
          <p>
            Design has been my focus since high school, but college shifted my passion to web
            development, especially back-end development.
          </p>
          <p>
            I'm dedicated to learning and growing, always working on new skills and exploring
            technologies to make a positive impact. No matter what challenges come my way, I live by
            the mindset: "Stay curious and keep moving forward."
          </p>
        </div>
        <img
          src="@/assets/boy_illustration.svg"
          alt="Hero image"
          class="w-full md:w-9/12 lg:w-5/12"
        />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import { Button } from 'primevue'

const emit = defineEmits(['nextAction'])
const emitNextAction = () => {
  emit('nextAction')
}
</script>
