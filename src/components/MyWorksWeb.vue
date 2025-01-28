<template>
  <div class="w-full">
    <VueFlicking
      :options="{
        circular: true,
        defaultIndex: 1,
        autoInit: true,
        bounce: '100%',
      }"
      :plugins="plugins"
      class="py-4 w-full"
    >
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="w-full sm:w-5/6 md:w-1/2 lg:w-4/6"
      >
        <Card class="w-full h-full overflow-hidden">
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
                target="_blank"
                class="flex items-center px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm bg-yellow text-black rounded-full space-x-2"
              >
                <img :src="link.icon" alt="icon" class="h-2 w-2" />
                <span class="text-base md:text-lg">
                  {{ link.label }}
                </span>
              </a>
            </div>
          </template>
        </Card>
      </div>
      <template #viewport>
        <div class="flicking-pagination"></div>
      </template>
    </VueFlicking>
  </div>
</template>

<script setup>
import { Perspective } from '@egjs/flicking-plugins'
import { Pagination } from '@egjs/flicking-plugins'
import { Fade } from '@egjs/flicking-plugins'
import { Card } from 'primevue'

const plugins = [new Perspective({ rotate: 0.5 }), new Fade(), new Pagination({ type: 'bullet' })]

const carouselItems = [
  {
    image: 'src/assets/works_dev/passafun.webp',
    title: 'Project Beta',
    description: 'Revolutionizing the way we think about technology.',
    links: [
      { label: 'Case Study', icon: 'src/assets/icons/github.svg', url: '#' },
      { label: 'Contact', icon: 'src/assets/icons/github.svg', url: '#' },
    ],
  },
  {
    image: 'src/assets/works_dev/passafun.webp',
    title: 'Passaquiz',
    description:
      'A dynamic frontend platform designed to seamlessly adapt to customizable quiz settings and content delivered by the CMS.',
    links: [
      { label: 'Case Study', icon: 'src/assets/icons/github.svg', url: '#' },
      { label: 'Contact', icon: 'src/assets/icons/github.svg', url: '#' },
    ],
  },
  {
    image: 'src/assets/works_dev/passafun.webp',
    title: 'Project Gamma',
    description: 'Pushing the boundaries of innovation.',
    links: [
      { label: 'Case Study', icon: 'src/assets/icons/github.svg', url: '#' },
      { label: 'Contact', icon: 'src/assets/icons/github.svg', url: '#' },
    ],
  },
]
</script>

<style>
.p-card-body {
  padding: 10px !important;
  height: 100%;
  justify-content: space-between;
}

.flicking-viewport {
  padding-bottom: 3rem !important;
}

.flicking-pagination-bullet {
  background-color: #fcfcfc;
}

.flicking-pagination-bullet-active {
  background-color: #f6e332;
}
</style>
