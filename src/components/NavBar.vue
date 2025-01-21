<template>
  <div class="flex justify-between items-center">
    <img src="@/assets/jj_logo.webp" alt="JJ Logo" class="h-10" />
    <Menu :size="40" color="#ffffff" class="cursor-pointer" />
  </div>
</template>

<script setup>
import { Menu } from 'lucide-vue-next'
</script>
