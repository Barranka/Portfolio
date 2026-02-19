<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="copy">© 2026 Ekaterina Komarova</span>
      <div class="links">
        <a href="https://github.com/Barranka" target="_blank">GitHub</a>
        <a href="mailto:cat123_93@mail.ru">Email</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg-muted);
  margin-top: auto;
  padding: var(--footer-padding-y) 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.copy {
  font-size: 14px;
  color: var(--color-text-muted);
}

.links {
  display: flex;
  gap: 16px;
}

.links a {
  font-size: 14px;
  color: var(--color-text-secondary);
  text-decoration: none;
}

.links a:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
