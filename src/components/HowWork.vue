<script setup>
import { resource } from "./resources";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";
const list = resource.ru.slides;
const currentSlide = ref(0);
let carousel = ref(null);
</script>
<template>
  <div class="dark:bg-[rgb(31,28,45)] bg-[rgb(243,246,255)]">
    <section
      class="dark:text-white pt-20 pb-10 justify-center container overflow-hidden relative"
    >
      <h1
        class="text-base dark:text-white text-indigo-600 text-center mb-20 phone:mb-10 font-semibold"
      >
        How Does It Work?
      </h1>
      <img
        class="absolute md:h-[478px] md2:left-[310px] semibig:left-[460px] big2:left-[520px] big3:left-[540px] 1xl:left-[585px] 2xl:left-[620px] big:h-[598px] big:w-[320px] big:left-[490px] lg:w-[269px] xl:left-[415px] lg:left-[377px] md2:w-[240px] semimd:h-[528px] semimd:left-[348px] semimd:w-[265px] md:left-[281px] md:w-[218px] sm2:left-[205px] poco2:left-[125px] sm:left-[165px] poco:w-[308px] poco:top-[145px] poco:h-[568px] poco:left-[85.5px] phone2:w-[272px] phone2:left-[64px] phone2:h-[555px] phone:left-[51px] phone:top-[145px] phone:h-[441px] phone:w-[218px]"
        width="326"
        src="https://dpay.uz/wp/wp-content/plugins/silicon-elementor/assets/images/phone-frame.png"
        alt=""
      />

      <div class="phone:w-11/12 mx-auto">
        <Carousel
          transition="700"
          :items-to-show="2.7"
          :wrap-around="true"
          ref="carousel"
          v-model="currentSlide"
          class="carousel phone:duration-300 md2:duration-700 md:w-11/12 md:mx-auto"
          :breakpoints="{
            320: {
              itemsToShow: 1,
              transition: 500,
            },
            780: {
              itemsToShow: 3,
            },
          }"
        >
          <Slide class="pb-52 slide" v-for="(slide, idx) in list" :key="slide">
            <div
              :class="
                currentSlide == idx
                  ? 'carousel__item  flex flex-col'
                  : 'carousel__item flex flex-col opacity-90'
              "
            >
              <img
                width="300"
                class="phone:w-9/12 mx-auto poco:w-[310px] big:h-[600px] big:min-w-[320px] poco:h-[570px] md:h-[480px] semimd:max-w-[270px] semimd:h-[530px]"
                :src="slide.thumb"
                alt="image"
              />
              <div
                :class="
                  currentSlide == idx
                    ? 'absolute phone__text bottom-16 md:bottom-20 poco:bottom-24 phone:bottom-0 -left-1 flex flex-col items-center'
                    : 'absolute opacity-0 w-full phone__text bottom-16 -left-1 flex flex-col items-center'
                "
              >
                <h3
                  class="font-bold text-lg mt-10 phone:mt-5 md:w-[200%] poco:mb-2 mb-5"
                >
                  {{ slide.title }}
                </h3>
                <span
                  class="font-semibold md:w-[250%] big:w-[150%] md2:w-[200%] text-lg phone:text-base opacity-60"
                >
                  {{ slide.text }}
                </span>
              </div>
            </div>
          </Slide>
        </Carousel>

        <div>
          <button
            class="btn-prev text-gray-500 phone:left-2 semimd:left-10 phone:top-[40%] shadow bg-white dark:bg-[rgb(42,40,56)] box-border px-4 py-2 absolute top-[500px] left-20 rounded-full"
            @click="carousel.prev"
          >
            ❮
          </button>
          <button
            class="btn-next text-gray-500 phone:right-2 semimd:right-10 phone:top-[40%] shadow bg-white dark:bg-[rgb(42,40,56)] box-border px-4 py-2 absolute top-[500px] right-20 rounded-full"
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
