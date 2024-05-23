<script setup lang="ts">
import ViewOtherProjects from "@/components/ViewOtherProjects.vue"
</script>

<template>
  <div class="mx-3">
    <ViewOtherProjects />
    <h1 class="mt-3 flex flex-col text-3xl font-bold">
      <span>Capstone -</span>
      <span>Banff Log Cabin</span>
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
        My role was the team design lead for designing and building the project over the course of 5
        months and managing 2 other design members.
      </p>
    </div>
    <img src="" alt="Banff Log Cabin Collage" class="mt-5" />
  </div>
</template>
