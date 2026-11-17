<script setup>
defineProps({ title: String, items: Array })
</script>

<template>
  <section class="section" id="gallery">
    <div class="wrap">
      <h2>{{ title }}</h2>
      <div class="grid">
        <figure v-for="item in items" :key="item.caption">
          <img :src="item.src" :alt="item.alt" width="600" height="400" />
          <figcaption>{{ item.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
figure {
  margin: 0;
}
img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
}
figcaption {
  margin-top: 0.6rem;
  font-weight: 500;
}
@media (min-width: 700px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
