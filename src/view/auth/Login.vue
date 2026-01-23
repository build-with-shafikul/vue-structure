<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = () => {
  console.log("Logging in with:", email.value, password.value)
  // আপনার লগইন লজিক এখানে লিখুন
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4 py-12 transition-colors duration-300">
    <div class="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
      
      <!-- Header -->
      <div class="text-center">
        <RouterLink to="/" class="inline-block">
          <img class="mx-auto h-12 w-auto" src="/islam.ico" alt="Logo" />
        </RouterLink>
        <h2 class="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">স্বাগতম!</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          আপনার অ্যাকাউন্ট নেই? 
          <RouterLink to="/register" class="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">রেজিস্ট্রেশন করুন</RouterLink>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">ইমেইল ঠিকানা</label>
            <input v-model="email" id="email" type="email" required class="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all" placeholder="example@mail.com" />
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">পাসওয়ার্ড</label>
            <input v-model="password" id="password" type="password" required class="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all" placeholder="••••••••" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input v-model="rememberMe" id="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-700 dark:text-gray-400">মনে রাখুন</label>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">পাসওয়ার্ড ভুলে গেছেন?</a>
          </div>
        </div>

        <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.02]">
          লগইন করুন
        </button>

        <!-- Social Login (Optional) -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300 dark:border-gray-700"></div></div>
          <div class="relative flex justify-center text-sm"><span class="px-2 bg-white dark:bg-slate-900 text-gray-500">অথবা</span></div>
        </div>

        <button type="button" class="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
          <img src="https://www.svgrepo.com/show/355037/google.svg" class="h-5 w-5" alt="Google" />
          Google দিয়ে লগইন করুন
        </button>
      </form>
    </div>
  </div>
</template>