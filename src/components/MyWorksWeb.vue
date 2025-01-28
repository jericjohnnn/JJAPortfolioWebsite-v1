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
        class="w-full sm:w-5/6 md:w-1/2 lg:w-1/3"
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
                class="flex flex-wrap items-center px-5 py-2 bg-black text-yellow rounded-full space-x-2"
              >
                <span class="text-base">
                  {{ link.label }}
                </span>
                <box-icon :type="link.icon === 'globe' ? '' : 'logo'" :name="link.icon" color='#F6E332' animation='tada'></box-icon>
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
    image: 'src/assets/works_dev/tudlo.webp',
    title: 'Tudlo',
    description: 'An online central place for all Tutors in Consolatrix College Toledo City inc.',
    links: [
      { label: 'Behance', icon: 'behance', url: 'https://www.behance.net/gallery/217925539/TUDLO-CAPSTONE-PROJECT-2024' },
      { label: 'Github', icon: 'github', url: 'https://github.com/jericjohnnn/Capstone-2024' },
    ],
  },
  {
    image: 'src/assets/works_dev/passafun.webp',
    title: 'Passaquiz',
    description:
      'A dynamic frontend platform designed to seamlessly adapt to customizable quiz settings and content delivered by the CMS.',
    links: [
      { label: 'Live demo', icon: 'globe', url: 'https://play.passafund.com/' },
    ],
  },
  {
    image: 'src/assets/works_dev/jja.webp',
    title: 'Portfolio website',
    description: 'A sleek portfolio showcasing my projects, skills, and experience as a software engineer.',
    links: [{ label: 'Github', icon: 'github', url: 'https://github.com/jericjohnnn/JJAPortfolioWebsite' }],
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
