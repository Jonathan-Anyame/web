<script setup>
defineProps({ cafe: Object })
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-inner">
      <div class="hero-text">
        <h1>{{ cafe.name }}</h1>
        <p class="headline">{{ cafe.headline }}</p>
        <p class="welcome">{{ cafe.welcome }}</p>
        <a class="button" href="#visit">See hours and location</a>
      </div>
      <img class="hero-img" :src="cafe.heroImage" :alt="cafe.heroAlt" width="600" height="600" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--board);
  color: var(--chalk);
  padding: 3rem var(--gutter) 4rem;
}
.hero-inner {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: 2.5rem;
  align-items: center;
}
h1 {
  font-size: clamp(2.75rem, 9vw, 5.5rem);
  line-height: 1;
  color: var(--chalk);
}
.headline {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3.5vw, 1.9rem);
  margin: 1rem 0 1.25rem;
  color: var(--gold);
}
.welcome {
  max-width: 34rem;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}
.hero-img {
  width: 100%;
  max-width: 420px;
  height: auto;
  justify-self: center;
  border-radius: 1.5rem;
}
@media (min-width: 800px) {
  .hero {
    padding-block: 5rem 6rem;
  }
  .hero-inner {
    grid-template-columns: 1.2fr 1fr;
  }
}
</style>
