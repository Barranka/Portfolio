<template>
  <BaseScreen variant="center">
    <RouterLink class="cta-button" to="/contact">
      <span class="label">Работать вместе</span>
      <span class="arrow">→</span>
    </RouterLink>
  </BaseScreen>
</template>

<script setup lang="ts">
import BaseScreen from '@/components/layout/BaseScreen.vue'
</script>

<style scoped>
/* === CTA BUTTON === */
.cta-button {
  position: relative;
  isolation: isolate;

  padding: 18px 36px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary);

  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  gap: 12px;

  transition:
    border-color 0.3s ease,
    color 0.3s ease,
    transform 0.25s ease;

  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.screen.is-active .cta-button {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.cta-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-accent);

  transform: translateX(-100%);
  transition: transform 0.35s ease;
  z-index: -1;
}

/* hover */
.cta-button:hover::before {
  transform: translateX(0);
}

.cta-button:hover {
  color: #fff;
  border-color: var(--color-accent);
}

/* === CONTENT === */
.label,
.arrow {
  position: relative;
  z-index: 1;
}

.arrow {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(4px);
}

@keyframes cta-pulse {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-accent) 30%, transparent);
  }
  100% {
    box-shadow: 0 0 0 12px transparent;
  }
}

.screen.is-active .cta-button {
  animation: cta-pulse 1.2s ease 0.6s 1;
}
</style>
