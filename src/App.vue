<template>
  <div class="app">
    <AppHeader />

    <AppLayout>
      <IntroScreen />
      <ValueScreen />
      <TimelineScreen />
      <StatsScreen />
      <CtaScreen />
    </AppLayout>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import IntroScreen from '@/components/sections/IntroScreen.vue'
import ValueScreen from '@/components/sections/ValueScreen.vue'
import TimelineScreen from '@/components/sections/TimelineScreen.vue'
import StatsScreen from '@/components/sections/StatsScreen.vue'
import CtaScreen from '@/components/sections/CtaScreen.vue'
</script>

<style scoped>
.app {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}
</style>
