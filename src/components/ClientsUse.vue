<script setup>
import { ref } from "vue";
import Reviews from "./Reviews.vue";
import Jobs from "./Jobs.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const isShown = ref(false);
</script>
<template>
  <section class="text-white md:py-10 md:pb-20 phone:py-0">
    <div class="container">
      <article
        id="video"
        class="flex justify-between pb-20 phone:flex-col-reverse phone:px-3 md:flex-row xl:items-center"
      >
        <div class="pt-28 phone:pt-12 md:w-[530px] md2:w-9/12">
          <h2
            class="font-bold mb-7 phone:text-xl poco:text-2xl dark:text-white text-indigo-500"
          >
            {{ data.abilsTitle }}
          </h2>
          <div v-for="art in data.howUse" class="flex">
            <i class="fa-solid fa-circle-check text-indigo-600 mr-4 pt-1"></i>
            <p
              class="dark:opacity-40 mb-5 font-normal opacity-80 text-gray-900 phone:text-base text-lg darak:font-thin tracking-wider dark:text-indigo-300"
            >
              {{ art }}
            </p>
          </div>
          <button
            class="mt-16 bg-indigo-500 phone:w-full md:w-9/12 xl:w-1/2 phone:mt-3 rounded-lg font-bold px-5 py-4"
          >
            Узнать больше <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div
          @click="isShown = !isShown"
          class="group duration-500 cursor-pointer flex justify-end phone:w-full md:self-center h-full mt-20 dark:opacity-60 dark:hover:opacity-100 relative"
        >
          <div v-show="!isShown">
            <i
              class="fa-solid fa-play duration-500 group-hover:text-white group-hover:bg-[rgb(99,102,241)] text-gray-600 text-lg bg-white dark:bg-[rgb(41,43,62,0.2)] dark:group-hover:bg-[rgb(99,102,241)] dark:group-hover:text-white rounded-full pl-8 pr-7 py-6 absolute dark:text-indigo-300 phone:top-14 phone:left-28 phone2:top-20 phone2:left-40 poco:left-48 poco:top-24 poco2:left-[240px] poco2:top-32 sm:left-[275px] sm:top-40 sm2:top-44 sm2:left-[320px] md:top-[90px] md:left-52 md2:top-24 md2:left-56 semimd:top-28 semimd:left-64 lg:left-[275px] lg:top-32 xl:left-[300px] xl:top-36 semibig:top-40 semibig:left-80 big:top-44 big:left-96 big3:left-[410px] 1xl:left-[440px] 1xl:top-48 2xl:left-[460px] 2xl:top-52"
            ></i>
            <img
              width="746"
              height="460"
              class="rounded-xl md:w-11/12 md:ml-auto"
              src="https://dpay.uz/wp/wp-content/uploads/2022/02/video-cover-app-showcase.jpg"
              alt="image"
            />
          </div>
          <div v-show="isShown" class="w-full flex md:w-11/12 h-full">
            <iframe
              class="rounded-xl w-full h-48 phone2:h-[240px] poco:h-80 sm:h-96 md:h-72 xl:h-96 big:h-[500px]"
              src="https://www.youtube.com/embed/9uKMZHDIVT8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </article>
    </div>
    <Jobs :data="data" />
    <Reviews :data="data" />
  </section>
</template>
<!-- <style scoped>
.group,
.group * {
  transition: 0.5s;
}
.video {
  transition: 0.3s;
}
</style> -->
