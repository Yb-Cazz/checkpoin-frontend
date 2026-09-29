<template>
  <div class=" max-w-7xl w-full mx-auto">
    <div class="mb-8 flex flex-col mt-3">
      <NuxtLink to="/" class="py-2 bg-none border-none text-cc-blue flex items-center gap-1 text-sm mb-3">
        <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        Back
      </NuxtLink>
      <h2 class="text-[22px] font-semibold text-cc-navy tracking-tight">Your Visit History</h2>
      <p class="text-cc-sub text-sm mt-1">Search for your previous visits using your email or phone number.</p>
    </div>

      <!-- Meeting table -->
    <div class="bg-white rounded-xl border border-cc-gray-mid p-6">
      <div class="flex border-b border-cc-gray-mid mb-6 gap-0">
        <div 
          class="px-4.5 py-2.5 text-sm  cursor-pointer whitespace-nowrap"
          :class="{'border-cc-blue border-b-2 text-cc-blue font-medium': activeTab === 'Pending', 'text-cc-sub': activeTab !== 'Pending'}"
          @click="changeTab('Pending')"
        >
          Pending
        </div>

        <div 
          class="px-4.5 py-2.5 text-sm text-cc-sub cursor-pointer whitespace-nowrap hover:text-cc-text" 
          :class="{'border-cc-blue border-b-2 text-cc-blue font-medium': activeTab === 'Ongoing', 'text-cc-sub': activeTab !== 'Ongoing'}" 
          @click="changeTab('Ongoing')"
        >
          Ongoing
        </div>

        <div 
          class="px-4.5 py-2.5 text-sm text-cc-sub cursor-pointer whitespace-nowrap hover:text-cc-text" 
          :class="{'border-cc-blue border-b-2 text-cc-blue font-medium': activeTab === 'Completed', 'text-cc-sub': activeTab !== 'Completed'}"
          @click="changeTab('Completed')"
        >
          Completed 
        </div>
      </div>

      <!-- Search section -->
      <div class="bg-white rounded-xl border border-cc-gray-mid p-6 mb-4">
        <div class="flex gap-2">
          <div class="relative flex-1">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-cc-gray-dark w-3.75 h-3.75 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input class="w-full border border-cc-gray-mid rounded-lg pl-9 py-2.5 text-sm outline-none focus:border-cc-blue" type="text" placeholder="Enter your name or phone...">
          </div>
          <AppButton class="w-auto! py-2.5! text-sm!">Search</AppButton>
        </div>
      </div>

      <!-- Pending List -->
      <div v-if="activeTab == 'Pending'" class="mt-5">

        <div class="bg-white border border-cc-gray-mid rounded-lg p-5 mb-2.5 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <AppAvatar initials="TE" color="blue" />
              <div><div class="font-medium text-[13.5px]">Emeka Okafor</div><div class="text-xs text-cc-gray-dark">Digital services</div></div>
            </div>
            <AppBadge status="completed">Pending</AppBadge>
          </div>
          <div class="text-[13px] text-cc-gray-dark mt-2 flex gap-6"><span>📅 June 14, 2025</span><span>🕐 10:30 AM</span><span>💼 Business Meeting</span></div>
        </div>
      </div>

            <!-- Ongoing List -->
      <div v-if="activeTab == 'Ongoing'" class="mt-5">

        <div class="bg-white border border-cc-gray-mid rounded-lg p-5 mb-2.5 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <AppAvatar initials="TE" color="blue" />
              <div><div class="font-medium text-[13.5px]">Emeka Okafor</div><div class="text-xs text-cc-gray-dark">Digital services</div></div>
            </div>
            <AppBadge status="completed">Ongoing</AppBadge>
          </div>
          <div class="text-[13px] text-cc-gray-dark mt-2 flex gap-6"><span>📅 June 14, 2025</span><span>🕐 10:30 AM</span><span>💼 Business Meeting</span></div>
        </div>
      </div>

            <!-- Completed List -->
      <div v-if="activeTab == 'Completed'" class="mt-5">

        <div class="bg-white border border-cc-gray-mid rounded-lg p-5 mb-2.5 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <AppAvatar initials="TE" color="blue" />
              <div><div class="font-medium text-[13.5px]">Emeka Okafor</div><div class="text-xs text-cc-gray-dark">Digital services</div></div>
            </div>
            <AppBadge status="completed">Completed</AppBadge>
          </div>
          <div class="text-[13px] text-cc-gray-dark mt-2 flex gap-6"><span>📅 June 14, 2025</span><span>🕐 10:30 AM</span><span>💼 Business Meeting</span></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { type Tabs } from '../../types/types'

definePageMeta({
    layout: 'guest'
})

const activeTab = ref<Tabs>('Pending');
const changeTab = (tab:Tabs) => {
  activeTab.value = tab
}



</script>

<!-- 
      <div v-if="activeTab == 'Pending'" class="bg-white border border-cc-gray-mid rounded-lg p-5 mb-2.5 hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between mb-3">
          <div class="flex items-center gap-2.5">
             <AppAvatar initials="EO" color="blue" class="w-11! h-11!" />
             <div><div class="font-medium text-[15px]">Emeka Okafor</div><div class="text-xs text-cc-gray-dark">emeka@nnpcgroup.com</div></div>
          </div>
          <AppBadge status="pending">Pending</AppBadge>
        </div>
        <div class="bg-cc-gray rounded-lg p-3 text-[13.5px] text-cc-sub mb-2">
          <span class="font-medium text-cc-navy">Purpose:</span> Discussing SEPAL integration with NNPC's upstream division...
        </div>
        <div class="flex gap-4 text-xs text-cc-gray-dark mb-3 pt-3 border-t border-cc-gray-mid">
          <NuxtLink to="/meeting-modal" class="px-3.5 py-2 bg-[#D1FAE5] text-[#065F46] rounded-md text-[13px] font-medium hover:bg-[#A7F3D0]">View Details</NuxtLink>
        </div>
      </div> -->