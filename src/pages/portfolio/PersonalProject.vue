<script setup lang="ts">
import ViewOtherProjects from "@/components/ViewOtherProjects.vue"
import PPCollage from '@/assets/images/personal-project-collage.jpg'
</script>

<template>
  <div class="mx-3">
    <ViewOtherProjects />
    <div class="md:flex justify-center">
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
        <img :src="PPCollage" alt="This current website collage" class="my-10 w-56 md:w-full object-cover object-center mx-auto rounded-lg shadow-lg shadow-[rgb(0,0,0,0.4)]" />
      </div>
    </div>

  </div>
</template>
