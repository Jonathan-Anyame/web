<script setup>
import { computed } from 'vue'

const props = defineProps({ visit: Object })
// Highlight today's opening hours.
const today = computed(() => new Date().getDay())
</script>

<template>
  <section class="section visit" id="visit">
    <div class="wrap">
      <h2>{{ visit.title }}</h2>
      <p class="sample">{{ visit.sampleNote }}</p>
      <div class="visit-grid">
        <div class="card">
          <h3>Opening hours</h3>
          <table>
            <tbody>
              <tr v-for="(h, i) in visit.hours" :key="h.day" :class="{ today: i === today }">
                <th scope="row">{{ h.day }}<span v-if="i === today"> (today)</span></th>
                <td>{{ h.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card">
          <h3>{{ visit.locationTitle }}</h3>
          <address>
            <span v-for="line in visit.address" :key="line">{{ line }}</span>
          </address>
          <h3>{{ visit.contactTitle }}</h3>
          <p class="contact">
            <a :href="`mailto:${visit.email}`">{{ visit.email }}</a><br />
            <a :href="`tel:${visit.phone.replace(/\s/g, '')}`">{{ visit.phone }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.visit {
  background: var(--gold);
}
.sample {
  margin: 0.5rem 0 2rem;
  font-style: italic;
}
.visit-grid {
  display: grid;
  gap: 1.5rem;
}
.card {
  background: var(--paper);
  border-radius: 1rem;
  padding: 1.5rem;
}
h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  text-align: left;
  padding: 0.55rem 0.25rem;
  border-bottom: 1px solid #dcd8cd;
  font-weight: 400;
}
tr.today th,
tr.today td {
  font-weight: 700;
  background: #fff3d1;
}
address {
  font-style: normal;
  margin-bottom: 1.5rem;
}
address span {
  display: block;
}
.contact a {
  color: var(--ink);
}
@media (min-width: 800px) {
  .visit-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
