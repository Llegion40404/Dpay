<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const currentSlide = ref(0);
let carousel = ref(null);
</script>
<template>
  <div class="dark:bg-[rgb(31,28,45)] bg-[rgb(243,246,255)]">
    <section
      class="dark:text-white pt-20 pb-10 justify-center container relative"
    >
      <h1
        class="text-2xl dark:text-white text-[#604a8b] text-center mb-20 phone:mb-10 font-semibold"
      >
        How Does It Work?
      </h1>
      <img
        class="absolute md:h-[500px] md2:left-[310px] semibig:left-[460px] big2:left-[505px] big3:left-[525px] 1xl:left-[565px] 2xl:left-[605px] big:h-[630px] z-50 big:left-[475px] big:w-[350px] big2:w-[350px] xl:left-[415px] lg:left-[377px] semimd:h-[548px] lg:w-80 semimd:left-[348px] md:left-[260px] md:w-4/12 sm2:left-[220px] poco2:left-[140px] sm:left-[175px] poco:w-[280px] poco:top-[140px] poco:h-[568px] poco:left-[100px] phone2:w-[272px] phone2:left-[64px] phone2:h-[555px] phone:left-[51px] phone:top-[142px] phone:h-[441px] phone:w-[218px]"
        width="326"
        src="../img/phone_frame.png"
        alt=""
      />

      <div class="phone:w-11/12 md:w-full mx-auto">
        <Carousel
          transition="700"
          :items-to-show="2.7"
          :wrap-around="true"
          ref="carousel"
          v-model="currentSlide"
          class="carousel phone:duration-300 md2:duration-700 w-full md:mx-auto"
          :breakpoints="{
            320: {
              itemsToShow: 1,
              transition: 500,
            },
            780: {
              itemsToShow: 2,
            },
            1100: {
              itemsToShow: 3,
            },
          }"
        >
          <Slide
            class="pb-52 slide"
            v-for="(slide, idx) in data.slides"
            :key="slide"
          >
            <div
              :class="
                currentSlide == idx
                  ? 'carousel__item  flex flex-col opacity-100 duration-500'
                  : 'carousel__item flex flex-col opacity-30 duration-500'
              "
            >
              <img
                width="300"
                class="phone:w-8/12 rounded-3xl md2:min-w-[120%] mx-auto poco:w-full big:h-[600px] big:min-w-[320px] poco:h-[550px] md:h-[480px] md:min-w-[240px] semimd:h-[530px]"
                :src="slide.thumb"
                alt="image"
              />
              <div
                :class="
                  currentSlide == idx
                    ? 'absolute phone__text  md:bottom-20 poco:bottom-16 phone:bottom-1 phone2:bottom-10 -left-1 flex flex-col items-center'
                    : 'absolute opacity-0 w-full phone__text bottom-16 -left-1 flex flex-col items-center'
                "
              >
                <h3
                  class="font-bold text-lg mt-10 phone:mt-5 md:w-[200%] poco:mb-2 mb-5"
                >
                  {{ slide.title }}
                </h3>
                <span
                  class="font-semibold md:w-full big:w-[150%] text-lg phone:text-base opacity-60"
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
