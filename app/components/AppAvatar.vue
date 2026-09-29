<template>
  <div :class="['w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0', colorClasses[color]]">
    {{ initials }}
  </div>
</template>

<script setup>
defineProps({
  initials: String,
  color: { type: String, default: 'blue' }
})

const colorClasses = {
  blue: 'bg-cc-blue-light text-cc-blue',
  green: 'bg-[#D1FAE5] text-[#065F46]',
  red: 'bg-cc-red-light text-cc-red',
  purple: 'bg-[#EDE9FE] text-[#5B21B6]',
  orange: 'bg-[#FEF3C7] text-[#92400E]'
}
</script>