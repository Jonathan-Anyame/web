<script setup>
defineProps({ about: Object })
</script>

<template>
  <section class="section about" id="space">
    <div class="wrap about-grid">
      <h2>{{ about.title }}</h2>
      <div>
        <p v-for="p in about.paragraphs" :key="p">{{ p }}</p>
        <ul class="points">
          <li v-for="point in about.points" :key="point">{{ point }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  gap: 1rem 3rem;
}
p {
  max-width: 38rem;
  margin-bottom: 1rem;
}
.points {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.points li {
  background: var(--gold);
  color: var(--ink);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-weight: 500;
  font-size: 0.95rem;
}
@media (min-width: 800px) {
  .about-grid {
    grid-template-columns: 1fr 2fr;
  }
}
</style>
