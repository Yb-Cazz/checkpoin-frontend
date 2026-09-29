<template>
    <component
        is="div"
        class="bg-white rounded-3xl p-4 md:p-10 w-full md:w-2xl shadow-[0_4px_24px_rgba(26,92,184,0.1),0_0_0_1px_rgba(26,92,184,0.06)]"
    >
        <!-- logo -->
        <div class="relative w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center">
            <img src="../assets/images/ccl_logo.png" alt="" class="w-full">
        </div>
        
        <slot />

    </component>
</template>

<script setup lang="ts">
</script>
