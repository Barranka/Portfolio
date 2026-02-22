<template>
  <BaseScreen variant="center">
    <div class="about">
      <img class="photo" src="/about.jpg" alt="Ekaterina Komarova" />
      <div class="circle">
        <div class="text">
          <p>
            Вне работы для меня важно движение и смена контекста — спорт, путешествия, долгие
            прогулки со своей собакой.
          </p>

          <p>
            Люблю делать что‑то руками: например, макраме — оно учит терпению, вниманию к деталям и
            усидчивости.
          </p>

          <p class="accent">
            Наверное, поэтому мне так откликается работа Frontend-разработчика — здесь важны
            внимание к деталям, гибкость мышления и постоянное развитие.
          </p>
        </div>
      </div>
    </div>
  </BaseScreen>
</template>

<script setup lang="ts">
import BaseScreen from '@/components/layout/BaseScreen.vue'
</script>

<style scoped>
.about {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: relative;
  z-index: 1;

  width: 640px;
  height: 640px;
  border-radius: 50%;

  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));

  display: flex;
  align-items: center;

  padding: 56px 72px 56px 180px;

  opacity: 0;
  transform: scale(0.96);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.text {
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  transition-delay: 0.4s;
}

.text p {
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.text p + p {
  margin-top: 14px;
}

.text .accent {
  color: var(--color-text-primary);
  font-weight: 500;
}

.photo {
  transform: translateX(40%);
  position: relative;
  z-index: 2;

  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 22px;

  transform: translateX(40%) translateY(12px);
  opacity: 0;

  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
  transition-delay: 0.4s;
}

/* ===== ACTIVE STATE ===== */
.is-active .circle {
  opacity: 1;
  transform: scale(1);
}

.is-active .text {
  opacity: 1;
  transform: translateY(0);
}

.is-active .photo {
  opacity: 1;
  transform: translateX(40%) translateY(0);
}

@keyframes circle-in {
  to {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}

@keyframes photo-in {
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

@media (max-width: 768px) {
  .about {
    width: 100%;
    flex-direction: column;
  }

  .text p {
    font-size: 14px;
    text-align: center;
  }

  .photo {
    width: 180px;
    height: 240px;
  }

  .is-active .photo {
    transform: translateY(40px);
  }

  .circle {
    border-radius: none;
    padding: 16px;
    width: 340px;
    height: 340px;
  }
}
</style>
