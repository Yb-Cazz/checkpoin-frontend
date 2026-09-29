<template>
  <component 
    :is="to ? NuxtLink : 'button'" 
    :to="to" 
    :class="[
      'inline-flex items-center justify-center gap-3 rounded-md px-7 py-3.5 text-[15px] font-medium transition-all tracking-tight w-full',
      variant === 'primary' 
        ? 'bg-black text-white hover:bg-black/80 hover:-translate-y-px border-none' 
        : 'bg-white border border-black hover:bg-cc-blue-light'
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'
const NuxtLink = resolveComponent('NuxtLink')

defineProps({
  to: { type: String, default: null },
  variant: { type: String, default: 'primary' } // 'primary' | 'secondary'
})
</script>