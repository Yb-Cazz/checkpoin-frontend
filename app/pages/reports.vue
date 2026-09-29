<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-[22px] font-semibold text-cc-navy tracking-tight">Reports & Analytics</h2>
        <p class="text-cc-sub text-sm mt-1">Visitor trends and operational insights.</p>
      </div>
      <div class="flex gap-2">
        <button class="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-[13px] font-medium border border-cc-gray-mid bg-white text-cc-sub hover:bg-cc-gray hover:text-cc-text transition-all">📄 PDF</button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
      <StatCard label="Total Visits" value="43" sub="This week" />
      <StatCard color="green" label="Completion Rate" value="84%" sub="Meetings completed" />
      <StatCard color="blue" label="Avg. Wait Time" value="4m" sub="Visitor to response" />
      <StatCard label="Repeat Visitors" value="12" sub="Returned this week" />
    </div>

    <div class="bg-white rounded-xl border border-cc-gray-mid p-6">
      <h3 class="text-base font-semibold text-cc-navy mb-4">Visitor Log</h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead><tr class="bg-cc-gray"><th class="text-left text-xs font-semibold text-cc-gray-dark uppercase tracking-wider p-3 border-b border-cc-gray-mid">Visitor</th><th class="text-left text-xs font-semibold text-cc-gray-dark uppercase tracking-wider p-3 border-b border-cc-gray-mid">Employee</th><th class="text-left text-xs font-semibold text-cc-gray-dark uppercase tracking-wider p-3 border-b border-cc-gray-mid">Status</th></tr></thead>
          <tbody>
            <tr class="hover:bg-[#F9FAFB]"><td class="p-3 border-b border-cc-gray-mid text-[13.5px]"><div class="font-medium text-cc-navy">Emeka Okafor</div><div class="text-xs text-cc-gray-dark">emeka@nnpcgroup.com</div></td><td class="p-3 border-b border-cc-gray-mid text-[13.5px]">Chidi Okeke</td><td class="p-3 border-b border-cc-gray-mid text-[13.5px]"><AppBadge status="pending">Pending</AppBadge></td></tr>
            <tr class="hover:bg-[#F9FAFB]"><td class="p-3 border-b border-cc-gray-mid text-[13.5px]"><div class="font-medium text-cc-navy">Precious Obi</div><div class="text-xs text-cc-gray-dark">p.obi@seplat.com</div></td><td class="p-3 border-b border-cc-gray-mid text-[13.5px]">Chidi Okeke</td><td class="p-3 border-b border-cc-gray-mid text-[13.5px]"><AppBadge status="ongoing">Ongoing</AppBadge></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>