<template>
  <div class="app">
    <AppHeader />

    <AppLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <ContactsSection />
    </AppLayout>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
import ContactsSection from '@/components/sections/ContactsSection.vue'
</script>

<style scoped>
.app {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}
</style>
