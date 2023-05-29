<script setup>
import "vue3-carousel/dist/carousel.css";
import { resource } from "./resources";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";
const currentSlide = ref(0);
let carousel = ref(null);
</script>
<template>
  <section class="py-20 phone:py-0">
    <h1
      class="text-indigo-600 dark:text-white font-bold text-lg text-center mb-20 poco:mb-10"
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
      :breakpoints="{
        320: {
          itemsToShow: 1,
          mouseDrag: true,
          touchDrag: true,
        },
        520: {
          itemsToShow: 2.2,
          mouseDrag: true,
          touchDrag: true,
        },
        1030: {
          itemsToShow: 4,
        },
        1330: {
          itemsToShow: 5,
        },
        1630: {
          itemsToShow: 6,
        },
      }"
    >
      <Slide
        class="pb-20 poco2:mx-5"
        v-for="(user, idx) in resource.characters"
        :key="idx"
      >
        <div class="pt-10 phone:w-full phone:flex flex-col">
          <main
            class="w-72 h-60 pt-16 poco:pt-10 mx-auto px-5 text-left dark:bg-[rgb(31,28,45)] phone:w-[95%] bg-white rounded-xl shadow-md relative"
          >
            <span
              class="absolute left-6 -top-6 bg-indigo-500 rounded-xl px-4 py-3"
            >
              <i
                class="fa-solid fa-quote-left text-xl shadow-xl text-white"
              ></i>
            </span>
            <span
              class="text-gray-600 font-bold dark:text-gray-300 phone:text-lg poco2:text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo soluta voluptas enim delectus in nisi eligendi
            </span>
            <div class="flex gap-1 pt-10 phone2:pt-4 phone:pt-4">
              <i v-for="star in 5" class="fa-solid fa-star text-yellow-400"></i>
            </div>
          </main>
          <footer class="h-auto ml-2 pt-5 flex items-center text-black">
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
