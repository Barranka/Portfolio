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

          <div class="meta">
            <span class="teaser">Что я чувствовала в начале</span>
            <div class="hint">
              Начало пути и было непросто, но именно здесь появилось внимание к деталям и желание
              делать качественно.
            </div>
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

          <div class="meta">
            <span class="teaser">Как менялись ощущения</span>
            <div class="hint">
              Появилось ощущение ответственности: не просто «сделать», а понять — зачем, для кого и
              как это будет жить дальше.
            </div>
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

          <div class="meta">
            <span class="teaser">С какими сложностями столкнулась</span>
            <div class="hint">
              Начала мыслить системно — код как часть живого продукта, а не набор фич.
            </div>
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
              Лидирование миграции Vue 2 → Vue 3: планирование, ведение бэклога, декомпозиция и
              приоритизация задач, координация процессов и ответственность за результат.
            </p>
          </div>

          <div class="meta">
            <span class="teaser">К чему я в итоге пришла</span>
            <div class="hint">
              Важнее всего стало не «сделать самой», а помочь команде принять правильные решения и
              довести работу до результата.
            </div>
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
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
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

/* === META ZONE === */
.meta {
  margin-top: 16px;
}

/* === TEASER (всегда виден) === */
.teaser {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  font-size: 13px;
  color: var(--color-text-tertiary);
  opacity: 0.7;

  cursor: default;
  transition: opacity 0.2s ease;
}

/* иконка-подсказка */
.teaser::after {
  content: '⤵';
  font-size: 12px;
  opacity: 0.6;
  transform: translateY(-1px);
  transition: opacity 0.2s ease;
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
.card:hover .teaser {
  opacity: 0.35;
}

.card:hover .hint {
  max-height: 200px;
  opacity: 1;
}
</style>
