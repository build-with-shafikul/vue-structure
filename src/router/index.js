import { createRouter, createWebHistory } from 'vue-router'

// এখানে আপনার Auth logic বা Store (যেমন Pinia) ইম্পোর্ট করুন
// উদাহরণস্বরূপ: import { useAuthStore } from '@/stores/auth'

const routes = [
  // Public Route
  {
    path: '/',
    name: "home",
    component: () => import("@/view/HomeView.vue")
  },


  // Auth Route
  {
    path: '/login',
    name: "login",
    component: () => import("@/view/auth/Login.vue")
  },
{
    path: '/register',
    name: "register",
    component: () => import("@/view/auth/Register.vue")
  },


  // Authenticate route
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/view/authenticate/DashBoard.vue"),
    meta: { requiresAuth: true },
  },


  // Not Found route
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("@/view/error/NotFound.vue")
  }
]

// ১. আগে রাউটার ইন্সট্যান্স তৈরি করুন
export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ২. এরপর Navigation Guard যোগ করুন
router.beforeEach((to, from, next) => {
  // আপনার লগইন চেক করার লজিক (নিচে একটি ডামি চেক দেওয়া হলো)
  const isAuthenticated = localStorage.getItem('token'); // অথবা আপনার store থেকে চেক করুন

  if (to.meta.requiresAuth && !isAuthenticated) {
    // যদি অথরাইজেশন লাগে কিন্তু ইউজার লগইন না থাকে
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    })
  } else {
    // সব ঠিক থাকলে পরবর্তী পেজে যেতে দাও
    next()
  }
})

export default router