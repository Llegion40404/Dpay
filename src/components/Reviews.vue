<script setup>
import "vue3-carousel/dist/carousel.css";
import { resource } from "./resources";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";
const currentSlide = ref(0);
let carousel = ref(null);
</script>
<template>
  <section class="py-20">
    <h1
      class="text-indigo-600 dark:text-white font-bold text-lg text-center mb-20"
    >
      Clients are Loving Our App
    </h1>
    <Carousel
      autoplay="3000"
      :items-to-show="6"
      :wrap-around="true"
      ref="carousel"
      v-model="currentSlide"
      :mouse-drag="false"
      :touch-drag="false"
    >
      <Slide
        class="pb-20"
        v-for="(user, idx) in resource.characters"
        :key="idx"
      >
        <div class="pt-10">
          <main
            class="w-72 h-60 pt-16 px-5 text-left dark:bg-[rgb(31,28,45)] bg-white rounded-2xl shadow-md relative"
          >
            <span
              class="absolute left-6 -top-6 bg-indigo-500 rounded-xl px-4 py-3"
            >
              <i
                class="fa-solid fa-quote-left text-xl shadow-xl text-white"
              ></i>
            </span>
            <span class="text-gray-600 font-bold dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo soluta voluptas enim delectus in nisi eligendi
            </span>
            <div class="flex gap-1 pt-10">
              <i v-for="star in 5" class="fa-solid fa-star text-yellow-400"></i>
            </div>
          </main>
          <footer class="h-auto pt-5 flex items-center text-black">
            <img width="55" :src="user.thumb" alt="user" />
            <div class="text-left ml-8">
              <h2 class="font-semibold dark:text-white">Name Surename</h2>
              <span class="text-gray-400">Software Engineer</span>
            </div>
          </footer>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>
