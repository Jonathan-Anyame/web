<script setup>
defineProps({ name: String })
</script>

<template>
  <footer class="footer">
    <p>{{ name }} is a fictional café made for a course assignment. All details are sample information.</p>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--board-deep);
  color: var(--chalk);
  padding: 2rem var(--gutter);
  text-align: center;
}
</style>
