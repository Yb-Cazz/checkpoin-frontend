<template>
  <div class="mx-5">
    <div class="flex items-center justify-between flex-wrap gap-3 my-4">
      <div>
        <div class="text-xs text-cc-gray-dark mb-0.5">Thursday, 18 June 2025</div>
        <h2 class="text-2xl font-bold text-cc-navy tracking-tight">Good morning Chidi!</h2>
      </div>
      <!-- <div class="bg-white border border-cc-gray-mid rounded-lg px-4 py-2.5">
        <div class="text-xs text-cc-gray-dark mb-2">Your status</div>
        <div class="flex gap-2">
          <button class="px-4 py-2 rounded-full text-[13px] font-medium border-[1.5px] border-[#059669] bg-[#D1FAE5] text-[#065F46] transition-all">Available</button>
          <button class="px-4 py-2 rounded-full text-[13px] font-medium border-[1.5px] border-cc-gray-mid bg-white text-cc-sub transition-all">Busy</button>
        </div>
      </div> -->
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
      <StatCard color="blue" label="Pending" value="3" sub="Awaiting response" />
      <StatCard label="Ongoing" value="1" sub="In progress" />
      <StatCard color="green" label="Completed" value="8" sub="This week" />
      <StatCard color="red" label="Declined" value="1" sub="This week" />
    </div>

    <!-- Meeting table -->
    <div class="bg-white rounded-xl border border-cc-gray-mid p-6">
      <div class="flex border-b border-cc-gray-mid mb-6 gap-0">
        <div 
          class="px-4.5 py-2.5 text-sm  cursor-pointer whitespace-nowrap"
          :class="{'border-cc-blue border-b-2 text-cc-blue font-medium': activeTab === 'Pending', 'text-cc-sub': activeTab !== 'Pending'}"
          @click="changeTab('Pending')"
        >
          Pending <span class="bg-cc-red text-white rounded-full px-1.5 py-0.5 text-[10px] ml-1">3</span>
        </div>

        <div 
          class="px-4.5 py-2.5 text-sm text-cc-sub cursor-pointer whitespace-nowrap hover:text-cc-text" 
          :class="{'border-cc-blue border-b-2 text-cc-blue font-medium': activeTab === 'Ongoing', 'text-cc-sub': activeTab !== 'Ongoing'}" 
          @click="changeTab('Ongoing')"
        >
          Ongoing <span class="bg-cc-red text-white rounded-full px-1.5 py-0.5 text-[10px] ml-1">2</span>
        </div>

        <div 
          class="px-4.5 py-2.5 text-sm text-cc-sub cursor-pointer whitespace-nowrap hover:text-cc-text" 
          :class="{'border-cc-blue border-b-2 text-cc-blue font-medium': activeTab === 'Completed', 'text-cc-sub': activeTab !== 'Completed'}"
          @click="changeTab('Completed')"
        >
          Completed <span class="bg-cc-red text-white rounded-full px-1.5 py-0.5 text-[10px] ml-1">1</span>
        </div>
      </div>

      <!-- Pending List -->
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
          <NuxtLink to="#" class="px-3.5 py-2 bg-[#D1FAE5] text-[#065F46] rounded-md text-[13px] font-medium hover:bg-[#A7F3D0]">View Details</NuxtLink>
        </div>
      </div>

            <!-- Ongoing List -->
      <div v-if="activeTab == 'Ongoing'" class="bg-white border border-cc-gray-mid rounded-lg p-5 mb-2.5 hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between mb-3">
          <div class="flex items-center gap-2.5">
             <AppAvatar initials="EO" color="blue" class="w-11! h-11!" />
             <div><div class="font-medium text-[15px]">Emeka Okafor</div><div class="text-xs text-cc-gray-dark">emeka@nnpcgroup.com</div></div>
          </div>
          <AppBadge status="pending">Ongoing</AppBadge>
        </div>
        <div class="bg-cc-gray rounded-lg p-3 text-[13.5px] text-cc-sub mb-2">
          <span class="font-medium text-cc-navy">Purpose:</span> Discussing SEPAL integration with NNPC's upstream division...
        </div>
        <div class="flex gap-4 text-xs text-cc-gray-dark mb-3 pt-3 border-t border-cc-gray-mid">
          <NuxtLink to="#" class="px-3.5 py-2 bg-[#D1FAE5] text-[#065F46] rounded-md text-[13px] font-medium hover:bg-[#A7F3D0]">View Details</NuxtLink>
        </div>
      </div>

            <!-- Completed List -->
      <div v-if="activeTab == 'Completed'" class="bg-white border border-cc-gray-mid rounded-lg p-5 mb-2.5 hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between mb-3">
          <div class="flex items-center gap-2.5">
             <AppAvatar initials="EO" color="blue" class="w-11! h-11!" />
             <div><div class="font-medium text-[15px]">Emeka Okafor</div><div class="text-xs text-cc-gray-dark">emeka@nnpcgroup.com</div></div>
          </div>
          <AppBadge status="pending">Completed</AppBadge>
        </div>
        <div class="bg-cc-gray rounded-lg p-3 text-[13.5px] text-cc-sub mb-2">
          <span class="font-medium text-cc-navy">Purpose:</span> Discussing SEPAL integration with NNPC's upstream division...
        </div>
        <div class="flex gap-4 text-xs text-cc-gray-dark mb-3 pt-3 border-t border-cc-gray-mid">
          <NuxtLink to="#" class="px-3.5 py-2 bg-[#D1FAE5] text-[#065F46] rounded-md text-[13px] font-medium hover:bg-[#A7F3D0]">View Details</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type Tabs } from '../../../../types/types'

definePageMeta({
  layout: 'staff'
})

const activeTab = ref<Tabs>('Pending');
const changeTab = (tab:Tabs) => {
  activeTab.value = tab
}

</script>