<template>
  <nav class="bg-white border-b border-cc-gray-mid px-6 py-1 h-13 flex items-center sticky top-0 z-50">

    <div class="flex justify-between py-2 w-full">
      <div class="relative w-28 flex items-center justify-center">
          <img src="../../assets/images/ccl_logo.png" alt="" class="w-full">
      </div>

      <DropdownMenu>
            <DropdownMenuTrigger>
                <div class="flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    <span class="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                        <span class="relative inline-flex h-3 w-3 animate-pulse rounded-full border-2 border-white bg-green-500"></span>
                    </span>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent class="w-56" align="center">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                
                <DropdownMenuGroup class="py-4">
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <span class="w-2 h-2 rounded-full bg-green-400"></span>
                            Availability Status
                        </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent side-flip>
                                <DropdownMenuItem>
                                    <span class="w-2 h-2 rounded-full bg-green-400"></span>
                                    Available
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
                                    Busy
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span class="w-2 h-2 rounded-full bg-red-400"></span>
                                    Unavailable
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                    </DropdownMenuSub>
                </DropdownMenuGroup>

                

                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const showStatusBar = ref(true)
const showActivityBar = ref(false)
const showPanel = ref(false)
const position = ref('bottom')


</script>