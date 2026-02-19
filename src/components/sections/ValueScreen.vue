<template>
  <BaseScreen>
    <div class="value">
      <p class="lead">Моя ценность — не только в «красивых экранах»</p>

      <div class="divider" />

      <ul class="list">
        <li style="--i: 1">Осознанное принятие решений</li>
        <li style="--i: 2">Ответственность за продукт</li>
        <li style="--i: 3">Работа со сложными и живыми системами</li>
        <li style="--i: 4">Забота о поддержке и будущем кода</li>
        <li style="--i: 5">Работа в команде и уважение к общим решениям</li>
        <li style="--i: 6">Умение говорить с бизнесом на одном языке</li>
      </ul>
    </div>
  </BaseScreen>
</template>

<script setup lang="ts">
import BaseScreen from '@/components/layout/BaseScreen.vue'
</script>

<style scoped>
.value {
  max-width: 640px;
  margin: 0 auto;
}

.lead {
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.list li {
  opacity: 0;
  transform: translateY(8px);

  position: relative;
  padding-left: 20px;

  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-secondary);
}

.list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;

  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-accent);
}

.screen.is-active .list li {
  animation: itemIn 0.6s ease-out forwards;
  animation-delay: calc(0.8s + var(--i) * 0.12s);
}

@keyframes itemIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
