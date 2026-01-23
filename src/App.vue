<script setup>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <code><strong>Current route path:</strong> {{ $route.fullPath }}</code>
  <NavBar/>


  <main>
    <RouterView />
  </main>


  <Footer/>
</template>