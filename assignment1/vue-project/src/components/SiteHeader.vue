<script setup>
defineProps({ name: String })
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top">{{ name }}</a>
    <nav aria-label="Page sections">
      <a href="#space">Space</a>
      <a href="#drinks">Drinks</a>
      <a href="#gallery">Gallery</a>
      <a href="#visit">Visit</a>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  padding: 1rem var(--gutter);
  background: var(--board-deep);
  color: var(--chalk);
}
.brand {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--chalk);
  text-decoration: none;
}
nav {
  display: flex;
  gap: 1.25rem;
}
nav a {
  color: var(--chalk);
  text-decoration: none;
  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
}
nav a:hover {
  border-bottom-color: var(--gold);
}
</style>
