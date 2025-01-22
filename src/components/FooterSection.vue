<template>
  <div class="bg-black text-neutral-400">
    <div class="container mx-auto px-4 py-5">
      <div class="flex justify-between items-center">
        <p class="text-xs font-light">© 2025 Made by Jeric John Aligato</p>
        <div class="bg-yellow p-1 rounded-full">
          <ChevronsUp :size="36" :stroke-width="1.5" class="text-black" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronsUp } from 'lucide-vue-next'
</script>
