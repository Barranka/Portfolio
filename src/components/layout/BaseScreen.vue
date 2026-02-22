<template>
  <section ref="el" class="screen" :class="variant">
    <div v-if="container" class="container">
      <slot />
    </div>
    <slot v-else />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  /** variant: default | muted | center */
  variant?: 'default' | 'muted' | 'center'
  /** оборачивать ли контент в .container */
  container?: boolean
}>()

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active')
        } else {
          entry.target.classList.remove('is-active')
        }
      })
    },
    { threshold: 0.6 },
  )

  observer.observe(el.value)
})
</script>

<style scoped>
.screen {
  height: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  scroll-snap-align: start;

  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.center {
  justify-content: center;
}

.screen.is-active {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .screen {
    padding: 0 18px;
  }
}
</style>
