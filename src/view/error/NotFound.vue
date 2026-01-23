<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="flex items-center min-h-screen p-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
    <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div class="max-w-md text-center">
        <!-- Error Code -->
        <h2 class="mb-8 font-extrabold text-9xl text-blue-600 dark:text-blue-500">
          <span class="sr-only">Error</span>404
        </h2>
        
        <!-- Error Message -->
        <p class="text-2xl font-semibold md:text-3xl text-gray-900 dark:text-white">
          দুঃখিত, পেজটি খুঁজে পাওয়া যায়নি!
        </p>
        
        <p class="mt-4 mb-8 text-gray-600 dark:text-gray-400">
          আপনি যে পেজটি খুঁজছেন তা হয়তো ডিলিট করা হয়েছে অথবা ভুল ইউআরএল টাইপ করেছেন। দয়া করে হোমপেজে ফিরে যান।
        </p>
        
        <!-- Back to Home Button -->
        <RouterLink 
          to="/" 
          class="inline-flex items-center px-8 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/50"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          হোমপেজে ফিরে যান
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>