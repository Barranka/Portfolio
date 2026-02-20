<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  height: 100svh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
</style>
