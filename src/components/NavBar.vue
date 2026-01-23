<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// মোবাইল মেনু এবং ড্রপডাউন এর স্টেট
const isMobileMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const isDark = ref(false)

// ডার্ক মোড টগল ফাংশন
const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// পেজ লোড হওয়ার সময় থিম চেক করা
onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

const closeMenus = () => {
  isMobileMenuOpen.value = false
  isDropdownOpen.value = false
}
</script>

<template>
  <nav class="fixed w-full z-30 top-0 left-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md  border-gray-200 dark:border-gray-700 shadow-md transition-colors duration-300">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse" @click="closeMenus">
        <img src="/islam.ico" class="h-8" alt="Islam Logo" />
        <span class="self-center text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white">Islam</span>
      </RouterLink>

      <!-- Right Side: Theme Toggle & Mobile Menu Button -->
      <div class="flex items-center md:order-2 space-x-2">
        
        <!-- Theme Toggle Button (Sun/Moon) -->
        <button 
          @click="toggleTheme" 
          type="button" 
          class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 transition-all"
        >
          <!-- Sun Icon (visible in dark mode) -->
          <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
          <!-- Moon Icon (visible in light mode) -->
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        </button>

        <!-- Mobile Menu Toggle Button (Hamburger) -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          type="button" 
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 transition-all"
        >
          <span class="sr-only">Open main menu</span>
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <div 
        class="w-full md:flex md:w-auto md:order-1 transition-all duration-300"
        :class="isMobileMenuOpen ? 'block' : 'hidden'"
      >
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <RouterLink to="/" @click="closeMenus" class="block py-2 px-3 text-blue-700 dark:text-blue-500 md:p-0" aria-current="page">Home</RouterLink>
          </li>
          
          <!-- Dropdown Link -->
          <li class="relative">
            <button 
              @click="isDropdownOpen = !isDropdownOpen" 
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Resources 
              <svg class="w-2.5 h-2.5 ms-2.5 transition-transform" :class="{'rotate-180': isDropdownOpen}" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
            </button>
            
            <!-- Dropdown Menu -->
            <div 
              v-if="isDropdownOpen" 
              class="md:absolute static left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-full md:w-44 dark:bg-gray-800 dark:divide-gray-700 mt-2"
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <RouterLink to="/dashboard" @click="closeMenus" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Dashboard</RouterLink>
                </li>
                <li>
                  <RouterLink to="/settings" @click="closeMenus" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Settings</RouterLink>
                </li>
                <li>
                  <RouterLink to="/earnings" @click="closeMenus" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Earnings</RouterLink>
                </li>
              </ul>
              <div class="py-1">
                <RouterLink to="/logout" @click="closeMenus" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 dark:hover:text-white">Sign out</RouterLink>
              </div>
            </div>
          </li>

          <li>
            <RouterLink to="/services" @click="closeMenus" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Services</RouterLink>
          </li>
          <li>
            <RouterLink to="/pricing" @click="closeMenus" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Pricing</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" @click="closeMenus" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>
/* একটি স্মুথ ট্রানজিশন ইফেক্ট এর জন্য */
.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>