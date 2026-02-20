<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  flex: 1;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
</style>
