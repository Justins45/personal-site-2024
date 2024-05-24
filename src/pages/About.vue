<script setup lang="ts">
import LetsWorkTogether from "@/components/LetsWorkTogether.vue"

import JustinRiverRocks from "@/assets/images/justin-river-rocks.jpg"
import { definePage } from "vue-router/auto"
definePage({
  name: "About",
  path: "/about",
  meta: {
    title: "Justin Shaw - About"
  }
})
</script>

<template>
  <div>
    <div class="md:my-5">
      <h1 class="ml-3 mt-3 text-xl md:text-3xl md:font-semibold">About the developer</h1>
      <p class="text-center text-5xl font-black uppercase md:text-8xl">Justin Shaw</p>
    </div>
    <div class="relative">
      <div class="absolute left-0 top-0 z-10 h-24 w-full bg-offblack-500 md:h-36 lg:h-56"></div>
      <div class="w-70 relative">
        <img
          :src="JustinRiverRocks"
          alt="image of me crouching on rocks by a river"
          class="absolute left-0 right-0 z-20 m-auto mt-3 h-32 md:h-60 lg:mt-5 lg:h-auto lg:w-10/12"
        />
        <div
          class="absolute top-20 z-30 h-1 w-20 rounded-r-full bg-gold min-[470px]:w-44 md:top-44 md:h-1.5 lg:top-[338px] lg:w-64"
        ></div>
        <div
          class="absolute top-24 z-30 h-1 w-20 rounded-r-full bg-gold min-[470px]:w-44 md:top-48 md:h-1.5 lg:top-[370px] lg:w-64"
        ></div>
        <div
          class="absolute top-28 z-30 h-1 w-20 rounded-r-full bg-gold min-[470px]:w-44 md:top-52 md:h-1.5 lg:top-[402px] lg:w-64"
        ></div>
      </div>
    </div>
    <div class="mt-40 h-16 w-full bg-offblack-500 md:mt-80 lg:mt-[525px]"></div>
    <div class="mx-3 mt-5 space-y-5 text-xl">
      <div class="md:flex">
        <div class="ml-3 md:w-1/2">
          <p class="text-sm">name</p>
          <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
          <div class="mt-2 space-y-2 md:mt-5">
            <p class="font-semibold">Justin Shaw</p>
            <p class="font-semibold">Alberta, Canada</p>
          </div>
        </div>
        <div class="ml-3 md:w-1/2">
          <p class="text-sm">contact</p>
          <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
          <div class="mt-2 grid max-w-xs grid-cols-2 md:mt-5 md:w-60">
            <a href="#" class="font-semibold decoration-gold hover:underline">Instagram</a>
            <a href="#" class="font-semibold decoration-gold hover:underline">LinkedIn</a>
          </div>
          <div class="mt-2 space-y-2">
            <p>
              <a
                href="mailto: shaw.justin@shaw.ca"
                class="font-semibold decoration-gold hover:underline"
                >shaw.justin@shaw.ca</a
              >
            </p>
            <p>
              <a href="tel:+14039881047" class="font-semibold decoration-gold hover:underline"
                >(403) 988-1047</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="md:flex">
        <div class="ml-3 md:w-1/2">
          <p class="text-sm">specialization</p>
          <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
          <div class="mt-2 space-y-2 md:mt-5">
            <p class="font-semibold md:mr-10">
              Website components, site fragments, and UX/UI design. I have spent hundreds of hours
              making easy-to-use pieces for large websites and projects, improving UX/UI design.
            </p>
          </div>
        </div>
        <div class="ml-3 md:w-1/2">
          <p class="text-sm">proficiencies</p>
          <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
          <div class="mt-2 grid grid-cols-2 md:mt-5">
            <p class="font-semibold">Tailwindcss</p>
            <p class="ml-10 font-semibold">HTML5</p>
            <p class="font-semibold">Vue 3</p>
            <p class="ml-10 font-semibold">CSS3</p>
            <p class="font-semibold">Javascript</p>
            <p class="ml-10 font-semibold">Figma</p>
            <p class="font-semibold">UX/UI Design</p>
            <p class="ml-10 font-semibold">Wordpress</p>
          </div>
        </div>
      </div>
      <div class="ml-3">
        <p class="text-sm">bio</p>
        <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
        <div class="mt-2 space-y-2 md:mt-5">
          <p class="font-semibold">
            My name is Justin, I am 22 years old website developer and I have been building websites
            for 4 years now. I specialize in
            <a href="" class="underline decoration-gold hover:text-gold">Vue</a> but I have also
            dabbled in <a href="" class="underline decoration-gold hover:text-gold">React</a> and
            built many websites in raw HTML and CSS. Building a website that you will love is what
            gets me out of bed in the morning and I wish to make the best website possible for your
            needs.
          </p>
        </div>
      </div>
    </div>
    <div class="my-5 md:my-10">
      <LetsWorkTogether />
    </div>
  </div>
</template>
