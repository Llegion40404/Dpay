<script setup>
import { register } from "swiper/element/bundle";
import { defineProps } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
register();
</script>
<template>
  <section class="container py-20 poco:px-2 phone:px-2 phone:pb-0 semimd:pb-28">
    <div id="more" class="px-2 flex justify-center">
      <swiper-container
        class="py-5"
        :space-between="15"
        :breakpoints="{
          640: { slidesPerView: 4, loop: false },
          900: { slidesPerView: 5 },
          1100: { slidesPerView: 6 },
        }"
        :slides-per-view="2"
        :loop="true"
      >
        <swiper-slide
          class="border px-3 py-8 rounded-lg border-gray-400 border-opacity-30 hover:bg-white hover:bg-opacity-10 hover:-translate-y-3 transition duration-300"
          v-for="logo in data.logos"
          ><img :src="logo" alt="logo"
        /></swiper-slide>
      </swiper-container>
    </div>
    <article class="flex pt-20 justify-around">
      <div class="w-7/12 phone:hidden semimd:block">
        <img src="../img/phone-features.png" alt="phone image" />
      </div>
      <article
        class="text-white w-3/5 semimd:text-left phone:text-center phone:w-full"
      >
        <h4
          class="font-bold phone:text-lg mb-8 dark:text-white text-indigo-500"
        >
          {{ data.descr }}
        </h4>
        <p
          class="opacity-80 text-slate-400 dark:opacity-80 font-bold dark:font-semibold text-lg mb-10"
        >
          {{ data.mainTitle }}
        </p>
        <div
          class="phone:flex-col flex poco2:flex-row flex-wrap justify-between"
        >
          <div
            v-for="f in data.features"
            class="w-5/12 semibig:w-[45%] phone:w-full poco2:w-1/2 phone:text-left mb-12 phone:px-3 semimd:px-0 flex items-start gap-6 justify-between"
          >
            <img
              class="dark:bg-[rgb(31,28,45)] bg-slate-100 p-4 box-border rounded-lg"
              :src="f.thumb"
              alt="icon"
            />
            <div>
              <h2
                class="font-bold text-xl text-indigo-500 dark:text-white mb-4 phone:mb-2"
              >
                {{ f.title }}
              </h2>
              <p
                class="dark:text-indigo-300 semibig:leading-7 phone:leading-6 text-gray-700 dark:opacity-50 font-light text-lg"
              >
                {{ f.text }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </article>
  </section>
</template>
