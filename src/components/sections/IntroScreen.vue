<template>
  <BaseScreen variant="center">
    <div class="intro">
      <h1 class="title">
        Я делаю интерфейсы,<br />
        которые мне <span class="accent">важны</span>
      </h1>

      <p class="subtitle">Vue • TypeScript • продуктовый подход</p>
    </div>
  </BaseScreen>
</template>

<script setup lang="ts">
import BaseScreen from '@/components/layout/BaseScreen.vue'
</script>

<style scoped>
.intro {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

.subtitle {
  margin-top: 24px;
  font-size: 16px;
  color: var(--color-text-secondary);
}

.accent {
  position: relative;
  color: var(--color-accent);
}

.accent::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-hover));
  transform: scaleX(0);
  transform-origin: left;
  animation: underline 1s ease-out forwards;
  animation-delay: 0.6s;
}

@keyframes underline {
  to {
    transform: scaleX(1);
  }
}
</style>
