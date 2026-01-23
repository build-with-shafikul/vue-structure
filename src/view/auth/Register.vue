<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const formData = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false
})

const handleRegister = () => {
  console.log("Registering:", formData.value)
  // রেজিস্ট্রেশন লজিক এখানে
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4 py-12 transition-colors duration-300">
    <div class="max-w-lg w-full space-y-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
      
      <div class="text-center">
        <RouterLink to="/">
          <img class="mx-auto h-12 w-auto" src="/islam.ico" alt="Logo" />
        </RouterLink>
        <h2 class="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">নতুন অ্যাকাউন্ট তৈরি করুন</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          ইতিমধ্যে অ্যাকাউন্ট আছে? 
          <RouterLink to="/login" class="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">লগইন করুন</RouterLink>
        </p>
      </div>

      <form class="mt-8 space-y-5" @submit.prevent="handleRegister">
        <div class="grid grid-cols-1 gap-5">
          <!-- Full Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">পুরো নাম</label>
            <input v-model="formData.fullName" type="text" required class="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" placeholder="আপনার নাম" />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">ইমেইল ঠিকানা</label>
            <input v-model="formData.email" type="email" required class="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" placeholder="example@mail.com" />
          </div>

          <!-- Password Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">পাসওয়ার্ড</label>
              <input v-model="formData.password" type="password" required class="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" placeholder="••••••••" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">নিশ্চিত করুন</label>
              <input v-model="formData.confirmPassword" type="password" required class="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" placeholder="••••••••" />
            </div>
          </div>
        </div>

        <!-- Terms -->
        <div class="flex items-center">
          <input v-model="formData.terms" id="terms" type="checkbox" required class="h-4 w-4 text-blue-600 border-gray-300 rounded" />
          <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-400">
            আমি <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">শর্তাবলী</a> মেনে নিচ্ছি
          </label>
        </div>

        <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01]">
          রেজিস্ট্রেশন সম্পন্ন করুন
        </button>
      </form>
    </div>
  </div>
</template>