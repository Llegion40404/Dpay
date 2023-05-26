<script setup>
import { resource } from "./resources";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";
const list = resource.slides;
const currentSlide = ref(0);
let carousel = ref(null);
</script>
<template>
  <div class="dark:bg-[rgb(31,28,45)] bg-[rgb(243,246,255)]">
    <section
      class="dark:text-white pt-20 pb-10 justify-center container overflow-hidden relative"
    >
      <h1
        class="text-base dark:text-white text-indigo-600 text-center mb-20 font-semibold"
      >
        How Does It Work?
      </h1>
      <img
        class="absolute top-[185px] left-[605px]"
        width="326"
        src="https://dpay.uz/wp/wp-content/plugins/silicon-elementor/assets/images/phone-frame.png"
        alt=""
      />

      <div class="w-9/12 mx-auto">
        <Carousel
          transition="700"
          :items-to-show="2.7"
          :wrap-around="true"
          ref="carousel"
          v-model="currentSlide"
          class="carousel"
        >
          <Slide class="pb-52 slide" v-for="(slide, idx) in list" :key="slide">
            <div
              :class="
                currentSlide == idx
                  ? 'carousel__item  flex flex-col'
                  : 'carousel__item flex flex-col opacity-90'
              "
            >
              <img width="328" :src="slide.thumb" alt="image" />
              <div
                :class="
                  currentSlide == idx
                    ? 'absolute phone__text bottom-16 -left-1 flex flex-col items-center'
                    : 'absolute opacity-0 phone__text bottom-16 -left-1 flex flex-col items-center'
                "
              >
                <h3 class="font-bold text-lg mt-10 mb-5">{{ slide.title }}</h3>
                <span class="font-semibold text-lg w-[145%] opacity-60">
                  {{ slide.text }}
                </span>
              </div>
            </div>
          </Slide>
        </Carousel>

        <div>
          <button
            class="btn-prev text-gray-500 shadow bg-white dark:bg-[rgb(42,40,56)] box-border px-4 py-2 absolute top-[500px] left-20 rounded-full"
            @click="carousel.prev"
          >
            ❮
          </button>
          <button
            class="btn-next text-gray-500 shadow bg-white dark:bg-[rgb(42,40,56)] box-border px-4 py-2 absolute top-[500px] right-20 rounded-full"
            @click="carousel.next"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.phone__text,
.carousel .slide {
  transition: 0.6s;
}
</style>
