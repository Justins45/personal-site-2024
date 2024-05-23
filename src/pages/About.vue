<script setup lang="ts">
import LetsWorkTogether from "@/components/LetsWorkTogether.vue"
</script>

<template>
  <div>
    <div class="">
      <h1 class="ml-3 mt-3 text-xl">About the developer</h1>
      <p class="text-center text-5xl font-black uppercase">Justin Shaw</p>
    </div>
    <img src="" alt="image of me crouching on rocks by a river" />
    <div class="h-16 bg-offblack-500"></div>
    <div class="mx-3 mt-5 space-y-5 text-xl">
      <div class="ml-3">
        <p class="text-sm">name</p>
        <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
        <div class="mt-2 space-y-2">
          <p class="font-semibold">Justin Shaw</p>
          <p class="font-semibold">Alberta, Canada</p>
        </div>
      </div>
      <div class="ml-3">
        <p class="text-sm">contact</p>
        <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
        <div class="mt-2 grid grid-cols-2">
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
      <div class="ml-3">
        <p class="text-sm">specialization</p>
        <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
        <div class="mt-2 space-y-2">
          <p class="font-semibold">
            Website components, site fragments, and UX/UI design. I have spent hundreds of hours
            making easy-to-use pieces for large websites and projects, improving UX/UI design.
          </p>
        </div>
      </div>
      <div class="ml-3">
        <p class="text-sm">proficiencies</p>
        <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
        <div class="mt-2 grid grid-cols-2">
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
      <div class="ml-3">
        <p class="text-sm">bio</p>
        <div class="-ml-3 h-[1px] bg-offblack-300/30"></div>
        <div class="mt-2 space-y-2">
          <p class="font-semibold">
            My name is Justin, I am 22 years old website developer and I have been building websites
            for 4 years now. I specialize in
            <a href="" class="underline decoration-gold">Vue</a> but I have also dabbled in
            <a href="" class="underline decoration-gold">React</a> and built many websites in raw
            HTML and CSS. Building a website that you will love is what gets me out of bed in the
            morning and I wish to make the best website possible for your needs.
          </p>
        </div>
      </div>
    </div>
    <div class="my-5">
      <LetsWorkTogether />
    </div>
  </div>
</template>
