<script setup lang="ts">
import { PaintBrushIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import LetsWorkTogether from '@/components/LetsWorkTogether.vue'
import HaveAQuestion from '@/components/HaveAQuestion.vue'
import ServiceCard from '@/components/ServiceCard.vue'
</script>

<template>
  <div>
    <div class="mx-3">
      <h1 class="uppercase font-black text-5xl mt-3">I'm Justin</h1>
      <p class="uppercase font-bold text-xl">Your web developer</p>
    </div>
    <img src="" alt="Image of me in a cafe" class="my-4">
    <div class="uppercase font-black text-xl space-y-3 mx-3">
      <p>Hand made</p>
      <div class="bg-gold h-1.5 w-36 rounded-full"></div>
      <p>Custom CSS</p>
      <div class="bg-gold h-1.5 w-24 rounded-full"></div>
      <p>Calgary based</p>
      <div class="bg-gold h-1.5 w-12 rounded-full"></div>
      <p>Website building</p>
    </div>
    <div class="bg-offblack-500 text-offwhite-500 py-5 mt-5">
      <h2 class="uppercase text-center text-2xl font-semibold tracking-wider">Services</h2>
      <ServiceCard title="Website Design" :icon="PaintBrushIcon" text="Need a new design or a design in general? I can be the one-stop shop to have the design and the development of your website, or just the design/updates to a design if that is all you need." />
    </div>
    <LetsWorkTogether />
    <div class="mt-5 mx-3">
      <h2 class="text-3xl font-semibold tracking-wider text-center">Featured Project</h2>
      <div class="text-2xl font-semibold mt-3">
        <p>University</p>
        <p>Capstone Project</p>
      </div>
      <div class="mt-5 text-lg">
        <p>Goal was to design and build a website for a self found client</p>
        <div class="my-3">
          <p>Built with a team of 5 using</p>
          <ul class="list-disc ml-5">
            <li>React <span class="italic">(front end)</span></li>
            <li>Strapi <span class="italic">(headless cms)</span></li>
            <li>Stripe <span class="italic">(payment)</span></li>
          </ul>
        </div>
        <p>My role was the team design lead for designing and building the project over the course of 5 months and managing 2 other design members</p>
      </div>
      <div class="my-5 ">
        <RouterLink to="/portfolio" class="hover:underline underline-offset-2 decoration-gold flex justify-center">
          <p class="text-2xl">View more projects</p>
          <ArrowRightIcon class="w-8 h-8 ml-3" />
        </RouterLink>
      </div>
      <img src="" alt="image collage of university project" />
      <HaveAQuestion />
    </div>
  </div>
</template>
