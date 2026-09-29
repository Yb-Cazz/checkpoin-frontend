<template>
  <div>
    <div class="mb-8">
      <h2 class="text-[22px] font-semibold text-cc-navy tracking-tight">Meeting Details</h2>
      <p class="text-cc-sub text-sm mt-1">Full visitor and meeting information</p>
    </div>
    
    <div class="bg-[rgba(13,27,42,0.5)] min-h-100 flex items-center justify-center rounded-xl p-6">
      <div class="bg-white rounded-xl p-8 w-full max-w-130 shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-cc-navy">Visitor Information</h3>
          <button class="w-8 h-8 rounded-md bg-cc-gray flex items-center justify-center text-cc-sub text-lg hover:bg-cc-gray-mid transition-colors">✕</button>
        </div>
        <div class="flex items-center gap-2.5 p-4 bg-cc-gray rounded-lg mb-4">
          <AppAvatar initials="EO" class="w-13! h-13! text-lg!" />
          <div><div class="text-[17px] font-semibold text-cc-navy">Emeka Okafor</div><div class="text-[13px] text-cc-gray-dark">emeka@nnpcgroup.com</div></div>
        </div>
        <div class="flex justify-between py-2.5 border-b border-cc-gray-mid text-sm"><span class="text-cc-gray-dark font-medium">Visiting</span><span class="text-cc-text text-right">Chidi Okeke</span></div>
        <div class="flex justify-between py-2.5 border-b border-cc-gray-mid text-sm"><span class="text-cc-gray-dark font-medium">Time Requested</span><span class="text-cc-text text-right">Today · 9:15 AM</span></div>
        <div class="flex gap-2.5 mt-6">
          <AppButton class="flex-1">Accept</AppButton>
          <AppButton variant="secondary" class="flex-1 text-cc-red! border-cc-red! hover:bg-cc-red-light!">Decline</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>