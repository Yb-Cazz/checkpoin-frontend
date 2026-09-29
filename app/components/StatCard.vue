<template>
  <div class="bg-white rounded-lg border border-cc-gray-mid p-5">
    <div class="text-xs text-cc-gray-dark font-medium uppercase tracking-wider mb-1.5">{{ label }}</div>
    <div :class="['text-[28px] font-bold tracking-tight leading-none', colorClass]">{{ value }}</div>
    <div class="text-xs text-cc-gray-dark mt-1">{{ sub }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  label: String,
  value: [String, Number],
  sub: String,
  color: { type: String, default: 'navy' }
})

const colorClass = computed(() => {
  const map = { blue: 'text-cc-blue', red: 'text-cc-red', green: 'text-[#059669]', navy: 'text-cc-navy' }
  return map[props.color] || map.navy
})
</script>