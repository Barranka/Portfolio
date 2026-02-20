<template>
  <div class="app">
    <AppHeader />

    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<style scoped>
.app {
  height: 100svh;
  display: flex;
  flex-direction: column;
}
</style>
