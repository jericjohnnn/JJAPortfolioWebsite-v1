<template>
  <div class="w-full px-4 md:px-8 lg:px-16">
    <VueFlicking
      :options="{
        circular: true,
        align: 'center',
        defaultIndex: 1,
        bounce: '100%'
      }"
      :plugins="plugins"
      class="py-4"
    >
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="carousel-panel w-full sm:w-5/6 md:w-1/2 lg:w-1/3"
      >
        <Card
          class="w-full h-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <template #header>
            <div class="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </template>
          <template #title>
            <h3 class="text-lg md:text-xl font-bold text-gray-800 truncate">
              {{ item.title }}
            </h3>
          </template>
          <template #content>
            <p class="text-xs md:text-sm text-gray-600 mb-4 line-clamp-3">
              {{ item.description }}
            </p>
          </template>
          <template #footer>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="(link, linkIndex) in item.links"
                :key="linkIndex"
                :href="link.url"
                class="px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                {{ link.label }}
              </a>
            </div>
          </template>
        </Card>
      </div>
    </VueFlicking>
  </div>
</template>

<script setup>
import { Perspective } from '@egjs/flicking-plugins'
import { Fade } from "@egjs/flicking-plugins";
import { Card } from 'primevue'

const plugins = [new Perspective({ rotate: 0.5 }), new Fade()]

const carouselItems = [
  {
    image: 'src/assets/works_dev/passafun.webp',
    title: 'Project Beta',
    description: 'Revolutionizing the way we think about technology.',
    links: [
      { label: 'Learn More', url: '#' },
      { label: 'Live Demo', url: '#' },
    ],
  },
  {
    image: 'src/assets/works_dev/passafun.webp',
    title: 'PassaFun',
    description: 'A dynamic frontend platform designed to seamlessly adapt to customizable quiz settings and content delivered by the CMS.',
    links: [
      { label: 'Details', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    image: 'src/assets/works_dev/passafun.webp',
    title: 'Project Gamma',
    description: 'Pushing the boundaries of innovation.',
    links: [
      { label: 'Case Study', url: '#' },
      { label: 'Contact', url: '#' },
    ],
  }
]
</script>

<style>
.carousel-panel {
  margin-right: -10px !important;
}
</style>
