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
import BLCCollage from "@/assets/images/banff-log-cabin-collage.jpg"
</script>

<template>
  <div>
    <div class="md:mx-3 md:grid md:grid-cols-2 md:grid-rows-2 md:pr-10">
      <div class="mx-3 md:mx-0 md:mr-5 md:text-right">
        <h1 class="mt-3 text-5xl font-black uppercase lg:text-7xl xl:text-8xl">I'm Justin</h1>
        <p class="text-xl font-bold uppercase md:text-2xl lg:text-3xl xl:text-4xl">
          Your web developer
        </p>
      </div>
      <img
        :src="JustinCafe"
        alt="Image of me in a cafe"
        class="my-4 h-72 w-full object-cover object-top md:row-span-2 md:h-[456px]"
      />
      <div class="mx-3 space-y-3 text-xl font-black uppercase md:mt-9 md:space-y-0 md:text-right">
        <div class="-mr-16 -mt-16 hidden h-32 md:block">
          <div class="ml-auto h-1.5 w-64 rounded-full bg-gold"></div>
          <div class="ml-auto mt-8 h-1.5 w-48 rounded-full bg-gold"></div>
          <div class="ml-auto mt-8 h-1.5 w-32 rounded-full bg-gold"></div>
        </div>
        <div class="md:mr-5 md:text-2xl">
          <p>Hand made</p>
          <div class="h-1.5 w-36 rounded-full bg-gold md:hidden"></div>
          <p>Custom CSS</p>
          <div class="h-1.5 w-24 rounded-full bg-gold md:hidden"></div>
          <p>Calgary based</p>
          <div class="h-1.5 w-12 rounded-full bg-gold md:hidden"></div>
          <p>Website building</p>
        </div>
      </div>
    </div>
    <div class="mt-5 bg-offblack-500 py-5 text-offwhite-500 md:pb-10">
      <h2 class="text-center text-2xl font-semibold uppercase tracking-wider md:py-10 md:text-4xl">
        Services
      </h2>
      <div class="md:flex md:justify-between">
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
          text="Need a website built? I will build you a fresh fancy new website, or make changes to update the current site you already have."
        />
      </div>
    </div>
    <LetsWorkTogether />
    <div class="mx-3 mt-5">
      <h2 class="text-center text-3xl font-semibold tracking-wider md:py-8 md:text-4xl">
        Featured Project
      </h2>
      <div class="md:mt-10 md:flex">
        <div>
          <div class="mt-3 text-2xl font-semibold md:flex">
            <p>University</p>
            <p class="md:ml-2">Capstone Project</p>
          </div>

          <div class="mt-5 text-lg md:mr-10">
            <p>Goal was to design and build a website for a self found client.</p>
            <div class="my-3">
              <p>Built with a team of 5 using</p>
              <ul class="ml-5 list-disc">
                <li>React <span class="italic">(front end)</span></li>
                <li>Strapi <span class="italic">(headless cms)</span></li>
                <li>Stripe <span class="italic">(payment)</span></li>
              </ul>
            </div>
            <p>
              My role was the team design lead for designing and building the project over the
              course of 5 months and managing 2 other design members.
            </p>
          </div>
        </div>
        <div class="md:w-96 md:pr-10">
          <img
            :src="BLCCollage"
            alt="Banff Log Cabin collage"
            class="mx-auto my-10 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgb(0,0,0,0.4)] md:w-full"
          />
        </div>
      </div>
      <div class="my-5 md:mb-10">
        <RouterLink
          to="/portfolio"
          class="flex justify-center decoration-gold underline-offset-2 hover:underline lg:-mt-28 lg:justify-start"
        >
          <p class="text-2xl sm:text-3xl">View more projects</p>
          <ArrowRightIcon class="ml-3 h-8 w-8" />
        </RouterLink>
      </div>
      <HaveAQuestion />
    </div>
  </div>
</template>
