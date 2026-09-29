<template>
  <div class="mx-5">
    <div class="flex items-center justify-between flex-wrap gap-3 my-4">
      <div>
        <div class="text-xs text-cc-gray-dark mb-0.5">Thursday, 18 June 2025</div>
        <h2 class="text-2xl font-bold text-cc-navy tracking-tight">Good morning, Chidi</h2>
      </div>
      <!-- <AppButton class="w-auto!" @click="openModal">
        Invite User
      </AppButton> -->
      <Dialog>
      <form>
        <DialogTrigger as-child>
          <AppButton class="w-auto!">
            Invite User
          </AppButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-106">
          <DialogHeader>
            <DialogTitle>Invite New User</DialogTitle>
            <DialogDescription>
              Enter the Users email here. Click Invite when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4">
            <div class="grid gap-3">
              <label for="email">Email</label>
              <input 
                id="email"
                v-model="email"
                v-bind="emailProps"
                name="email" 
                placeholder="name@company.com" 
                class="p-2 border border-black/20"
              />
              <ErrorMessage name="email" class="text-cc-red"/>
            </div>

          </div>
          <DialogFooter>
            <DialogClose as-child>
              <AppButton variant="primary">
                Cancel
              </AppButton>
            </DialogClose>
            <AppButton variant="secondary" type="submit">
              Invite
            </AppButton>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
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
import { z } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const activeTab = ref<Tabs>('Pending');
const changeTab = (tab:Tabs) => {
  activeTab.value = tab
}

const inviteSchema = z.object({
  email: z.string().email("Enter a valid email address"),
})

const {defineField, handleSubmit} = useForm({
  validationSchema: toTypedSchema(inviteSchema),
  initialValues: {
    email: ""
  }
})

const [email, emailProps] = defineField("email", {validateOnChange: true})



definePageMeta({
  layout: 'staff'
})
</script>