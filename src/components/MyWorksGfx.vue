<template>
  <div class="columns-2 gap-2 pb-10">
    <div
      v-for="gfxImage in gfxImages"
      :key="gfxImage.id"
      class="mb-2"
    >
      <img
        :src="gfxImage.url"
        :alt="gfxImage.alt"
        class="rounded shadow-md"
      />
    </div>
  </div>
</template>

<script setup>

const gfxImages = [
  { id: 1, url: 'src/assets/works_gfx/2-min.webp', alt: 'Image 1' },
  { id: 2, url: 'src/assets/works_gfx/9-min.webp', alt: 'Image 2' },
  { id: 3, url: 'src/assets/works_gfx/8-min.webp', alt: 'Image 3' },
  { id: 4, url: 'src/assets/works_gfx/7-min.webp', alt: 'Image 4' },
  { id: 5, url: 'src/assets/works_gfx/4-min.webp', alt: 'Image 5' },
  { id: 6, url: 'src/assets/works_gfx/13-min.webp', alt: 'Image 6' },
  { id: 7, url: 'src/assets/works_gfx/6-min.webp', alt: 'Image 7' },
  { id: 8, url: 'src/assets/works_gfx/11-min.webp', alt: 'Image 8' },
  { id: 9, url: 'src/assets/works_gfx/12-min.webp', alt: 'Image 9' },
  { id: 10, url: 'src/assets/works_gfx/3-min.webp', alt: 'Image 10' },
  { id: 11, url: 'src/assets/works_gfx/14-min.webp', alt: 'Image 11' },
];

</script>
