<script setup lang="ts">
import ViewOtherProjects from "@/components/ViewOtherProjects.vue"
import ComponentsCollage from '@/assets/images/artsman-components-collage.jpg'
</script>

<template>
  <div class="mx-3">
    <div class="md:flex justify-center">
      <div class="md:pr-10">
        <ViewOtherProjects />
        <h1 class="mt-3 flex flex-col text-3xl font-bold">Artsman Components</h1>
        <div class="mt-5 space-y-3 text-lg">
          <p>
            While working at Artsmanagment, a project I was put on was to build a internal library with
            Vue and TailwindCSS.
          </p>
          <p>
            The Goal was to take this internal library and use this to make other internal projects that
            would benefit the company and the product users.
          </p>
        </div>
      </div>
      <div class="md:w-2/3 md:pr-10">
        <img :src="ComponentsCollage" alt="Artsman components collage" class="my-10 w-56 md:w-full object-cover object-center mx-auto rounded-lg shadow-lg shadow-[rgb(0,0,0,0.4)]" />
      </div>
    </div>
  </div>
</template>
