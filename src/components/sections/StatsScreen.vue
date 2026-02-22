<template>
  <BaseScreen>
    <section class="growth">
      <h2 class="title">Как менялась моя роль в проектах</h2>

      <div class="divider" />

      <div class="cards">
        <div class="card">
          <span class="marker">Старт</span>

          <div class="content">
            <p>
              Старт во фронтенде через вёрстку: Figma, визуальная логика экранов и понимание, как UI
              и UX влияют на восприятие продукта.
            </p>
          </div>
        </div>

        <div class="card">
          <span class="marker">Фронтенд‑разработчик</span>

          <div class="content">
            <p>
              Работа с бизнес‑логикой, состоянием приложения, API, производительностью и качеством
              пользовательского опыта.
            </p>
          </div>
        </div>

        <div class="card">
          <span class="marker">Рост технической ответственности</span>

          <div class="content">
            <p>
              Переход к более сложным задачам и ответственности: работа с архитектурой, поддержка и
              развитие легаси‑кода, рефакторинг и долгосрочное сопровождение систем.
            </p>
          </div>
        </div>

        <div class="card">
          <span class="marker">Лидерские задачи и экспертиза</span>

          <div class="content">
            <p>
              Наставничество и поддержка команды, временная замена тимлида, решение сложных
              технических и менеджерских вопросов.
            </p>
            <p>
              Лидирование миграции Vue 2 → Vue 3: планирование, ведение бэклога, декомпозиция и
              приоритизация задач, координация процессов и ответственность за результат.
            </p>
          </div>
        </div>
      </div>
    </section>
  </BaseScreen>
</template>

<script setup lang="ts">
import BaseScreen from '@/components/layout/BaseScreen.vue'
</script>

<style scoped>
.growth {
  max-width: 900px;
  margin: 0 auto;
}

.title {
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 24px;
}

/* === CARD === */
.card {
  padding: 24px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  border-radius: 14px;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border-color: var(--color-accent);
}

/* === MARKER === */
.marker {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-accent);
}

/* === TEXT === */
.card p {
  font-size: 15px;
  line-height: 1.55;
  color: var(--color-text-secondary);
}

.card p + p {
  margin-top: 12px;
}

/* === HINT (раскрывается) === */
.hint {
  margin-top: 8px;
  padding-left: 14px;

  border-left: 2px solid color-mix(in srgb, var(--color-accent) 50%, transparent);

  font-size: 14px;
  line-height: 1.5;
  font-style: italic;
  color: var(--color-text-secondary);

  max-height: 0;
  overflow: hidden;
  opacity: 0;

  transition:
    max-height 0.35s ease,
    opacity 0.25s ease;
}

/* === HOVER LOGIC === */
.card:hover .hint {
  max-height: 200px;
  opacity: 1;
}
</style>
