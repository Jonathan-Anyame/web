<script setup>
defineProps({ title: String, note: String, drinks: Array })
</script>

<template>
  <section class="section menu" id="drinks">
    <div class="wrap">
      <h2>{{ title }}</h2>
      <p class="note">{{ note }}</p>
      <div class="drink-list">
        <article v-for="drink in drinks" :key="drink.name" class="drink">
          <img :src="drink.image" :alt="`${drink.name}`" width="400" height="300" />
          <div class="drink-body">
            <div class="drink-head">
              <h3>{{ drink.name }}</h3>
              <p class="price">{{ drink.price }}</p>
            </div>
            <dl>
              <div><dt>Size</dt><dd>{{ drink.size }}</dd></div>
              <div><dt>Taste</dt><dd>{{ drink.taste }}</dd></div>
              <div><dt>Caffeine</dt><dd>{{ drink.caffeine }}</dd></div>
              <div><dt>Best for</dt><dd>{{ drink.bestFor }}</dd></div>
            </dl>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu {
  background: var(--board);
  color: var(--chalk);
}
.menu h2 {
  color: var(--chalk);
}
.note {
  color: var(--gold);
  margin-bottom: 2rem;
}
.drink-list {
  display: grid;
  gap: 1.5rem;
}
.drink {
  background: var(--board-deep);
  border-radius: 1rem;
  overflow: hidden;
}
.drink img {
  display: block;
  width: 100%;
  height: auto;
}
.drink-body {
  padding: 1.25rem 1.25rem 1.5rem;
}
.drink-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1rem;
}
h3 {
  font-size: 1.35rem;
}
.price {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--gold);
}
dl div {
  display: grid;
  grid-template-columns: 6rem 1fr;
  gap: 0.75rem;
  padding: 0.55rem 0;
  border-top: 1px dashed rgba(242, 239, 232, 0.35);
}
dt {
  color: rgba(242, 239, 232, 0.7);
}
dd {
  margin: 0;
}
@media (min-width: 900px) {
  .drink-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
