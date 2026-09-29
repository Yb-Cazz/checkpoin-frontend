<template>
  <div class="max-w-2xl mx-auto px-4">
    <div class="my-8">
      <NuxtLink to="/" class="bg-none border-none text-cc-blue flex items-center gap-1 text-sm mb-3">
        <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        Back
      </NuxtLink>
      <h2 class="text-[22px] font-semibold text-cc-navy tracking-tight">Guest Registration</h2>
      <p class="text-cc-sub text-sm mt-1">Please provide your information below to check in.</p>
    </div>

    <div v-if="!submitted" class="bg-white rounded-xl border border-cc-gray-mid p-6 mb-8">
      <form @submit.prevent="handleCheckinSubmit">
        <div class="mb-5">
          <label class="block text-[13px] font-medium text-cc-navy mb-1.5">
            Full Name <span class="text-cc-red">*</span>
          </label>
          <input 
            class="w-full border border-cc-gray-mid rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-cc-blue focus:ring-[3px] focus:ring-cc-blue/10 transition-colors" 
            type="text" 
            placeholder="Emeka Okafor" 
            v-model="fullname"
            v-bind="fullnameProp"
            />

            <ErrorMessage name="fullname" class="text-cc-red"/>
        </div>

        <div class="mb-5">
          <label class="block text-[13px] font-medium text-cc-navy mb-1.5">
            Email Address <span class="text-cc-red">*</span>
          </label>
          <input 
            class="w-full border border-cc-gray-mid rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-cc-blue focus:ring-[3px] focus:ring-cc-blue/10 transition-colors" 
            type="email" 
            placeholder="emeka@company.com" 
            v-model="email"
            v-bind="emailProp"
          />

          <ErrorMessage name="email" class="text-cc-red"/>
        </div>

        <div class="mb-5">
          <label class="block text-[13px] font-medium text-cc-navy mb-1.5">
            Phone Number <span class="text-cc-red">*</span>
          </label>
          <input 
            class="w-full border border-cc-gray-mid rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-cc-blue focus:ring-[3px] focus:ring-cc-blue/10 transition-colors" 
            type="text" 
            placeholder="080 1234 5678" 
            v-model="phone"
            v-bind="phoneProp"
          />

          <ErrorMessage name="phone" class="text-cc-red"/>
        </div>

        <!-- who are you -->
        <div class="mb-5">
          <label class="block text-[13px] font-medium text-cc-navy mb-1.5">
            Who are you here to see? <span class="text-cc-red">*</span>
          </label>

          <!-- Selected host: shown once a user has picked someone -->
          <div
            v-if="selectedHost"
            class="flex items-center justify-between p-3.5 border border-cc-gray-mid rounded-lg bg-cc-white"
          >
            <div class="flex items-center gap-3">
              <AppAvatar :initials="getInitials(selectedHost.name)" color="blue" />
              <div>
                <div class="font-medium text-[13px]">{{ selectedHost.name }}</div>
                <div class="text-xs text-cc-gray-dark">{{ selectedHost.department }}</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="text-[13px] font-semibold py-2 px-3 w-24 rounded-2xl text-center"
                :class="{
                  'bg-cc-yellow/12 text-[#967901]' : selectedHost.availability == 'busy',
                  'bg-cc-green/12 text-[#057d43]' : selectedHost.availability == 'available',
                  'bg-cc-red/12 text-[#852618]' : selectedHost.availability == 'unavailable'
                }"
              >{{ selectedHost.availability }}</div>
              <button
                type="button"
                class="text-xs text-cc-blue underline"
                @click="clearSelectedHost"
              >
                Change
              </button>
            </div>
          </div>

          <!-- Search: shown until a host is selected -->
          <div v-else ref="searchWrapperRef" class="relative">
            <div class="border border-cc-gray-mid rounded-lg overflow-hidden">
              <!-- search bar -->
              <div class="flex flex-row gap-2 justify-between items-center ml-2 mr-4 py-1">
                <input
                  type="search"
                  placeholder="Search by username..."
                  class="w-full py-1 px-2 outline-none"
                  v-model="searchQuery"
                  @focus="onSearchFocus"
                  autocomplete="off"
                />
                <div class="shrink-0">
                  <svg v-if="isSearching" class="w-4 h-4 animate-spin text-cc-gray-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- results dropdown -->
            <div
              v-if="showDropdown"
              class="absolute z-10 mt-1 w-full max-h-64 overflow-y-auto border border-cc-gray-mid rounded-lg bg-white shadow-lg"
            >
              <div v-if="searchError" class="p-3.5 text-[13px] text-cc-red">
                {{ searchError }}
              </div>

              <div v-else-if="!isSearching && searchResults.length === 0" class="p-3.5 text-[13px] text-cc-gray-dark">
                No matching host found.
              </div>

              <div
                v-else
                v-for="host in searchResults"
                :key="host.id"
                class="flex items-center justify-between p-3.5 cursor-pointer hover:bg-cc-blue-light/40 transition-colors bg-cc-white"
                @click="selectHost(host)"
              >
                <div class="flex items-center gap-3">
                  <AppAvatar :initials="getInitials(host.name)" color="blue" />
                  <div>
                    <div class="font-medium text-[13px]">{{ host.name }}</div>
                    <div class="text-xs text-cc-gray-dark">{{ host.department }}</div>
                  </div>
                </div>
                <div
                  class="text-[13px] font-semibold py-2 px-3 w-24 rounded-2xl text-center"
                  :class="{
                    'bg-cc-yellow/12 text-[#967901]' : host.availability == 'busy',
                    'bg-cc-green/12 text-[#057d43]' : host.availability == 'available',
                    'bg-cc-red/12 text-[#852618]' : host.availability == 'unavailable'
                  }"
                >{{ host.availability }}</div>
              </div>
            </div>
          </div>

          <ErrorMessage name="hostId" class="text-cc-red block mt-1.5" />
        </div>

        <div class="mb-5">
          <label class="block text-[13px] font-medium text-cc-navy mb-1.5">
            Reason for Visit <span class="text-cc-red">*</span>
          </label>
          <textarea class="w-full min-h-22.5 border border-cc-gray-mid rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-cc-blue focus:ring-[3px] focus:ring-cc-blue/10 transition-colors" placeholder="e.g. Business meeting..."
          v-model="reason"
          v-bind="reasonProp"
          ></textarea>

        <ErrorMessage name="reason" class="text-cc-red" />
        </div>

        <div class="flex items-start gap-2.5 mb-1">
          <input
            class="mt-0.5 w-4 h-4 accent-cc-blue shrink-0"
            type="checkbox"
            id="consent"
            v-model="consent"
            v-bind="consentProp"
          />
          <label
            for="consent"
            class="text-[13px] text-cc-sub leading-relaxed cursor-pointer"
          >
            I agree that my information may be used for security and administrative purposes in accordance with CypherCrescent's visitor policy.
          </label>
        </div>
        <ErrorMessage name="consent" class="text-cc-red" />

        <AppButton 
          type="submit"
          :disabled="isLoading"
          class="mt-8"
        >
          <span v-if="isLoading">Submitting...</span>
          <span v-else>Submit Checkin</span>
        </AppButton>

      </form>
    </div>
    
    <div v-else class="bg-white rounded-xl border border-cc-gray-mid p-6 text-center py-12">
      <div class="w-18 h-18 bg-[#D1FAE5] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      
      <h3 class="text-[22px] font-bold text-cc-navy mb-2">Your request has been sent</h3>
      <p class="text-cc-sub text-[15px] leading-relaxed max-w-90 mx-auto mb-8">Please wait while the employee is notified. Security will direct you once they respond. This usually takes 1-2 minutes</p>
      <AppButton variant="secondary" @click="submitted = false">Register Another Visitor</AppButton>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import {z} from 'zod'
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { type HostDetails, type CheckinPayload } from '../../types/types'
import { useCheckin, useHostSearch } from '~/composables/useCheckin';
import { boolean } from 'zod/v4';


definePageMeta({
  layout: 'guest'
})

const submitted = ref(false)
const isLoading = ref(false)
const SEARCH_DEBOUNCE_MS = 350
const MIN_QUERY_LENGTH = 1

const searchQuery = ref('')
const searchResults = ref<HostDetails[]>([])
const isSearching = ref(false)
const showDropdown = ref(false)
const searchError = ref<string | null>(null)
const selectedHost = ref<HostDetails | null>(null)
const searchWrapperRef = ref<HTMLElement | null>(null)

const { checkin } = useCheckin()
const { searchHosts } = useHostSearch() 

let debounceTimer: ReturnType<typeof setTimeout> | null = null
let abortController: AbortController | null = null

watch(searchQuery, (query) => {
  if(debounceTimer) clearTimeout(debounceTimer)

  const trimmed = query.trim()

  // Don't hit API for if required length is not reached
  if (trimmed.length < MIN_QUERY_LENGTH) {
    searchResults.value = []
    showDropdown.value = false
    searchError.value = null
    return
  }

  debounceTimer = setTimeout(() => {
    performSearch(trimmed)
  }, SEARCH_DEBOUNCE_MS)
})

const performSearch = async (query: string) => {
  // cancel any awaiting request so a slow earlier response can't overwrite the results of a more recent request

  abortController?.abort()
  abortController = new AbortController()

  isSearching.value = true
  searchError.value = null

  try {
    const results = await searchHosts(query, abortController.signal)

    searchResults.value = results
    showDropdown.value = true
  } catch (err: any) {
    if (err?.name !== 'AbortError') {
      searchError.value = 'Unable to search right now. Please try again.'
      searchResults.value = []
      showDropdown.value = true
    }
  } finally {
    isSearching.value = false
  }
}

const  onSearchFocus = () => {
  if (searchResults.value.length > 0) {
    showDropdown.value = true
  }
}

// Select a host from the dropdown
const selectHost = (host: HostDetails) => {
  selectedHost.value = host
  setFieldValue('hostId', host.id)
  searchQuery.value = ''
  searchResults.value = []
  showDropdown.value = false
}

const clearSelectedHost = () => {
  selectedHost.value = null
  setFieldValue('hostId', null)
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .filter(boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

const handleClickOutside = () => {
  if (searchWrapperRef.value && !searchWrapperRef.value.contains(event?.target as Node)) {
    showDropdown.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  if (debounceTimer) clearTimeout(debounceTimer)
  abortController?.abort()
})



// Zod validation Schema
const checkinSchema = z.object({
  fullname: z.string().nonempty('Please enter your name'),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\d{11}$/, {
      message: "Phone number must be exactly 11 digits",
    }),
  hostId: z
    .number({ invalid_type_error: "Please select who you're here to see" })
    .nullable()
    .refine((val) => val !== null, {
      message: "Please select who you're here to see",
    }),
  reason: z.string().nonempty('Please enter your reason for visiting'),
  consent: z.boolean().refine((value) => value == true, {
    message: "You must agree to the visitor policy"
  }),
})

const {defineField, handleSubmit, setFieldValue} = useForm({
  validationSchema: toTypedSchema(checkinSchema),
  initialValues: {
    fullname: "",
    email: "",
    phone: "",
    hostId: null,
    reason: "",
    consent: false,
  }
})

const [fullname, fullnameProp] = defineField("fullname", {validateOnChange: true})
const [email, emailProp] = defineField("email", {validateOnChange: true})
const [phone, phoneProp] = defineField("phone", {validateOnChange: true})
const [reason, reasonProp] = defineField("reason", {validateOnChange: true})
const [consent, consentProp] = defineField("consent", {validateOnChange: true,})

const error = ref<string | null>(null)
const setError = (message: string) => {
  error.value = message
}

const handleCheckinSubmit = handleSubmit( async (values) => {
   isLoading.value = true
   setError("")

  const payload: CheckinPayload = {
    fullname: values.fullname,
    email: values.email,
    phone: values.phone,
    reason: values.reason,
    user_id: values.hostId as number,
  }


  try {
    const checkinUser = await checkin(payload)
  } catch (err) {
    setError("Failed to checkin user")
  } finally{
    isLoading.value = false
    submitted.value = true
  }

})


</script>