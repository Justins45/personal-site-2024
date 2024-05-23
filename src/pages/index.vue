<script setup lang="ts">
import {
  PaintBrushIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ArrowRightIcon
} from "@heroicons/vue/24/outline"
import LetsWorkTogether from "@/components/LetsWorkTogether.vue"
import HaveAQuestion from "@/components/HaveAQuestion.vue"
import ServiceCard from "@/components/ServiceCard.vue"

import JustinCafe from "@/assets/images/justin-cafe.jpeg"

</script>

<template>
  <div>
    <div class="mx-3">
      <h1 class="mt-3 text-5xl font-black uppercase">I'm Justin</h1>
      <p class="text-xl font-bold uppercase">Your web developer</p>
    </div>
    <img :src="JustinCafe" alt="Image of me in a cafe" class="my-4 w-full object-cover object-top h-72" />
    <div class="mx-3 space-y-3 text-xl font-black uppercase">
      <p>Hand made</p>
      <div class="h-1.5 w-36 rounded-full bg-gold"></div>
      <p>Custom CSS</p>
      <div class="h-1.5 w-24 rounded-full bg-gold"></div>
      <p>Calgary based</p>
      <div class="h-1.5 w-12 rounded-full bg-gold"></div>
      <p>Website building</p>
    </div>
    <div class="mt-5 bg-offblack-500 py-5 text-offwhite-500">
      <h2 class="text-center text-2xl font-semibold uppercase tracking-wider">Services</h2>
      <ServiceCard
        title="Website Design"
        :icon="PaintBrushIcon"
        text="Need a new design or a design in general? I can be the one-stop shop to have the design and the development of your website, or just the design/updates to a design if that is all you need."
      />
      <ServiceCard
        title="Website Maintenance"
        :icon="CommandLineIcon"
        text="Have a website that needs to be updated to a new domain or a new codebase? I can help out with that and get your site back up and running on the latest codebase you need!"
      />
      <ServiceCard
        title="Website Development"
        :icon="CodeBracketIcon"
        text="Need a website built? I will build you a fresh fancy new website, or make changes to update the current site you already have.  "
      />
    </div>
    <LetsWorkTogether />
    <div class="mx-3 mt-5">
      <h2 class="text-center text-3xl font-semibold tracking-wider">Featured Project</h2>
      <div class="mt-3 text-2xl font-semibold">
        <p>University</p>
        <p>Capstone Project</p>
      </div>
      <div class="mt-5 text-lg">
        <p>Goal was to design and build a website for a self found client</p>
        <div class="my-3">
          <p>Built with a team of 5 using</p>
          <ul class="ml-5 list-disc">
            <li>React <span class="italic">(front end)</span></li>
            <li>Strapi <span class="italic">(headless cms)</span></li>
            <li>Stripe <span class="italic">(payment)</span></li>
          </ul>
        </div>
        <p>
          My role was the team design lead for designing and building the project over the course of
          5 months and managing 2 other design members
        </p>
      </div>
      <div class="my-5">
        <RouterLink
          to="/portfolio"
          class="flex justify-center decoration-gold underline-offset-2 hover:underline"
        >
          <p class="text-2xl">View more projects</p>
          <ArrowRightIcon class="ml-3 h-8 w-8" />
        </RouterLink>
      </div>
      <img src="" alt="image collage of university project" />
      <HaveAQuestion />
    </div>
  </div>
</template>
