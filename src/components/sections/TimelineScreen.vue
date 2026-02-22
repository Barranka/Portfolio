<template>
  <BaseScreen>
    <div class="timeline">
      <h2 class="title">Мой путь</h2>

      <div class="divider" />

      <ul class="list">
        <li style="--i: 1">
          <span class="dot" />
          <div class="content">
            <span class="period">2021–2023</span>
            <strong>РЖД - Грузовые перевозки</strong>
            <span class="desc">Крупная система · Личный кабинет · 19 000+ компаний</span>
          </div>
        </li>

        <li style="--i: 2">
          <span class="dot" />
          <div class="content">
            <span class="period">2023–2024</span>
            <strong>Сбер</strong>
            <span class="desc">Внутренняя система · Интеграции · CI/CD · Тесты</span>
          </div>
        </li>

        <li style="--i: 3">
          <span class="dot" />
          <div class="content">
            <span class="period">2024–2025</span>
            <strong>Киберпротект</strong>
            <span class="desc">UI-Kit · Миграция Vue 2 → Vue 3 · Лидирование</span>
          </div>
        </li>

        <li style="--i: 4">
          <span class="dot accent" />
          <div class="content">
            <span class="period">2025–2026</span>
            <strong>Проектная работа</strong>
            <span class="desc">Admin‑панель · Работа с заказами · Поддержка приложения</span>
          </div>
        </li>
      </ul>
    </div>
  </BaseScreen>
</template>

<script setup lang="ts">
import BaseScreen from '@/components/layout/BaseScreen.vue'
</script>

<style scoped>
.timeline {
  max-width: 720px;
  margin: 0 auto;
}

.title {
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 40px;

  position: relative;
}

.list::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-border);
}

.list li {
  display: flex;
  gap: 20px;
  align-items: flex-start;

  opacity: 0;
  transform: translateY(16px);
}

.screen.is-active .list li {
  animation: itemIn 0.5s ease-out forwards;
  animation-delay: calc(0.8s + var(--i) * 0.15s);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-border);
  margin-top: 6px;
  flex-shrink: 0;
}

.dot.accent {
  background-color: var(--color-accent);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.period {
  font-size: 12px;
  color: var(--color-text-secondary);
}

strong {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.desc {
  font-size: 14px;
  line-height: 1.4;
  color: var(--color-text-secondary);
}

@keyframes itemIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
