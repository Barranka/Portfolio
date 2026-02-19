<template>
  <header class="header">
    <div class="container header-inner">
      <div class="logo">Ekaterina Komarova</div>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#stack">Stack</a>
        <a href="#contacts">Contacts</a>
      </nav>
    </div>
  </header>
</template>

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

@media (max-width: 768px) {
  .header-inner {
    flex-direction: column;
    gap: var(--header-gap-mobile);
  }

  .nav {
    gap: 16px;
  }
}
</style>
