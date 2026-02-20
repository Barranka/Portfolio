<template>
  <header class="header">
    <div class="container header-inner">
      <div class="logo">Ekaterina Komarova</div>
      <nav class="nav">
        <RouterLink to="/">Обо мне</RouterLink>
        <RouterLink to="/contact">Контакты</RouterLink>

        <a :href="`${baseUrl}Komarova_CV_Frontend_2026.pdf`" download class="resume-link">
          Скачать резюме
          <span class="arrow">↓</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>
.header {
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg);
  padding: var(--header-padding-y) 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 600;
  font-size: 18px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav a {
  color: var(--color-text-secondary);
  font-size: 14px;
  text-decoration: none;
}

.nav a:hover {
  color: var(--color-accent);
}

.nav .router-link-active {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .header-inner {
    flex-direction: column;
    gap: var(--header-gap-mobile);
  }

  .nav {
    gap: 16px;
  }
}

/* === RESUME LINK === */
.resume-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 6px 12px;
  border: 1px solid var(--color-border);
  border-radius: 999px;

  font-size: 13px;
  color: var(--color-text-primary);
  background: transparent;

  transition:
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease;
}

.resume-link:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.resume-link .arrow {
  font-size: 12px;
  transition: transform 0.25s ease;
}

.resume-link:hover .arrow {
  transform: translateY(2px);
}
</style>
