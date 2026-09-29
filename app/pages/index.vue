<template>

    <!-- welcome card -->
    <AppCard>
      <!-- card body -->
      <div class="px-4 text-center">
        <h1 class="lg:text-[32px] text-2xl font-bold text-cc-navy leading-[1.15] tracking-tight mb-1.5">
            Welcome to<br><span class="text-cc-blue">CypherCrescent</span>
        </h1>
        <p class="text-cc-sub lg:text-[15px] text-sm mb-10 leading-relaxed">
            We're delighted to have you here.<br>Please check in to let us know you've arrived.
        </p>
      
        <AppButton to="/checkin" class="lg:mb-6 mb-3">
            <svg class="w-4.5 h-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            Check In
        </AppButton>
        <AppButton to="/visits" variant="secondary">
            <svg class="w-4.5 h-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            View My Meetings
        </AppButton>
      
        <div class="mt-8 text-cc-gray-dark text-[13px]">
            Need help? Please speak with 
            <span class="text-cc-red font-medium">Security</span>
        </div>
      </div>
    </AppCard>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'blank'
})
</script>