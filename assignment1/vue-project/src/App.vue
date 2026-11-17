<script setup>
import { cafe } from './data/cafe.js'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSpace from './components/AboutSpace.vue'
import DrinksMenu from './components/DrinksMenu.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import VisitInfo from './components/VisitInfo.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader :name="cafe.name" />
  <main>
    <HeroSection :cafe="cafe" />
    <AboutSpace :about="cafe.about" />
    <DrinksMenu :title="cafe.drinksTitle" :note="cafe.drinksNote" :drinks="cafe.drinks" />
    <PhotoGallery :title="cafe.galleryTitle" :items="cafe.gallery" />
    <VisitInfo :visit="cafe.visit" />
  </main>
  <SiteFooter :name="cafe.name" />
</template>
