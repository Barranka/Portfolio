<template>
  <BaseScreen>
    <div class="value">
      <p class="title">Моя ценность — не только в «красивых экранах»</p>

      <div class="divider" />

      <ul class="list">
        <li style="--i: 1">Принимаю решения осознанно, а не «как получится»</li>
        <li style="--i: 2">Чувствую ответственность за продукт, а не только за свой кусок кода</li>
        <li style="--i: 3">Не пугаюсь сложного кода и долгоживущих проектов</li>
        <li style="--i: 4">Думаю о поддержке и будущем кода, а не только о дедлайне</li>
        <li style="--i: 5">Командная работа и уважение к общим решениям — база</li>
        <li style="--i: 6">Понимаю приоритеты бизнеса и умею фокусироваться на результате</li>
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

.title {
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
