<script setup lang="ts">
import ViewOtherProjects from "@/components/ViewOtherProjects.vue"
import BLCCollage from "@/assets/images/banff-log-cabin-collage.jpg"

import { definePage } from "vue-router/auto"
definePage({
  name: "blc",
  path: "/portfolio/banfflogcabin",
  meta: {
    title: "Justin Shaw - BLC"
  }
})
</script>

<template>
  <div class="mx-3">
    <ViewOtherProjects />
    <div class="justify-center md:flex">
      <div class="md:pr-10">
        <h1 class="mt-3 flex flex-col text-3xl font-bold md:flex-row">
          <span>Capstone -</span>
          <span class="md:ml-2">Banff Log Cabin</span>
        </h1>
        <div class="mt-5 text-lg">
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
            My role was the team design lead for designing and building the project over the course
            of 5 months and managing 2 other design members.
          </p>
        </div>
      </div>
      <div class="md:w-2/3 md:pr-10">
        <img
          :src="BLCCollage"
          alt="Banff Log Cabin collage"
          class="mx-auto my-10 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgb(0,0,0,0.4)] md:w-full"
        />
      </div>
    </div>
  </div>
</template>
