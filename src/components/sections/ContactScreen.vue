<template>
  <BaseScreen variant="center">
    <section class="contacts">
      <h2 class="title">Связаться со мной</h2>

      <ul class="list">
        <li class="item telegram">
          <span class="icon">✈️</span>
          <a href="https://t.me/baranka_18" target="_blank">baranka_18</a>
        </li>

        <li class="item email">
          <span class="icon">✉️</span>
          <a href="mailto:cat123_93@mail.ru">cat123_93@mail.ru</a>
        </li>

        <li class="item phone">
          <span class="icon">📞</span>
          <a href="tel:+79645752930">+7 964 575-29-30</a>
        </li>
      </ul>
    </section>
  </BaseScreen>
</template>

<script setup lang="ts">
import BaseScreen from '@/components/layout/BaseScreen.vue'
</script>

<style scoped>
.contacts {
  text-align: center;
}

.title {
  font-size: 20px;
  margin-bottom: 32px;
  color: var(--color-text-primary);
}

/* === LIST === */
.list {
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  gap: 16px;
}

/* === ITEM === */
.item {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 14px 18px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-bg);

  opacity: 0;
  transform: translateY(12px);

  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

/* появление при входе экрана */
.screen.is-active .item {
  opacity: 1;
  transform: translateY(0);
}

.screen.is-active .item:nth-child(1) {
  transition-delay: 0.1s;
}
.screen.is-active .item:nth-child(2) {
  transition-delay: 0.2s;
}
.screen.is-active .item:nth-child(3) {
  transition-delay: 0.3s;
}

/* === ICON === */
.icon {
  font-size: 18px;
  opacity: 0.8;
}

/* === LINKS === */
.item a {
  text-decoration: none;
  font-size: 15px;
  color: var(--color-text-primary);
}

/* === HOVER === */
.item:hover {
  border-color: var(--color-accent);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.item:hover .icon {
  opacity: 1;
}
</style>
