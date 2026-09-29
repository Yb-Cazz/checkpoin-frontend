<template>
  <span :class="['inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium', statusClasses[status]]">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  status: { type: String, required: true }
})

const statusClasses = {
  pending: 'bg-[#FEF3C7] text-[#92400E]',
  accepted: 'bg-[#D1FAE5] text-[#065F46]',
  ongoing: 'bg-[#DBEAFE] text-[#1E40AF]',
  completed: 'bg-[#F3F4F6] text-[#374151]',
  declined: 'bg-[#FEE2E2] text-[#991B1B]',
  available: 'bg-[#D1FAE5] text-[#065F46]',
  busy: 'bg-[#FEE2E2] text-[#991B1B]',
  unavailable: 'bg-[#F3F4F6] text-[#374151]'
}
</script>