<script setup lang="ts">
import ViewOtherProjects from "@/components/ViewOtherProjects.vue"
import PPCollage from "@/assets/images/personal-project-collage.jpg"

import { definePage } from "vue-router/auto"
definePage({
  name: "Personal Project",
  path: "/portfolio/personalproject",
  meta: {
    title: "Justin Shaw - Personal"
  }
})
</script>

<template>
  <div class="mx-3">
    <ViewOtherProjects />
    <div class="justify-center md:flex">
      <div class="md:pr-10">
        <h1 class="mt-3 flex flex-col text-3xl font-bold">Personal Project</h1>
        <div class="mt-5 space-y-3 text-lg">
          <p>Goal was to design and build a new website for myself acting as my digital resume.</p>
          <p>
            Building this website would replace the old site I had online since the middle of
            university. Built with Vue, this project takes what I had learned with Artsmanagment and
            applies that to outside the work space.
          </p>
        </div>
      </div>
      <div class="md:w-2/3 md:pr-10">
        <img
          :src="PPCollage"
          alt="This current website collage"
          class="mx-auto my-10 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgb(0,0,0,0.4)] md:w-full"
        />
      </div>
    </div>
  </div>
</template>
