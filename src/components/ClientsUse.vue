<script setup>
import { ref } from "vue";
import { resource } from "./resources";
import Reviews from "./Reviews.vue";
const isShown = ref(false);
const blockScroll = () => {
  document.querySelector("body").classList.toggle("overflow-hidden");
};
</script>
<template>
  <section class="text-white py-20 phone:py-0">
    <div class="container">
      <article
        id="video"
        class="flex justify-between pb-20 phone:flex-col-reverse phone:px-3 md:flex-row xl:items-center"
      >
        <div class="pt-28 phone:pt-12 md:w-[800px]">
          <h2 class="font-bold mb-7 dark:text-white text-indigo-500">
            С помощью Dpay вы можете:
          </h2>
          <div v-for="art in resource.ru.howUse" class="flex">
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
        <a
          @click="(isShown = !isShown), blockScroll()"
          class="group video pt-20 dark:opacity-60 dark:hover:opacity-80 relative"
          href="#"
        >
          <i
            class="fa-solid fa-play group-hover:text-white group-hover:bg-[rgb(99,102,241)] text-gray-600 text-lg bg-white dark:bg-[rgb(41,43,62,0.2)] dark:group-hover:bg-[rgb(99,102,241)] dark:group-hover:text-white rounded-full pl-8 pr-7 py-6 absolute dark:text-indigo-300 phone:top-32 phone:left-28 phone2:top-40 phone2:left-40 poco:left-48 poco:top-44 poco2:left-[240px] poco2:top-52 sm:left-[275px] sm:top-60 sm2:top-64 sm2:left-[320px] md:top-40 md:left-48 md2:top-44 md2:left-56 semimd:top-48 semimd:left-64 lg:left-[275px] lg:top-52 xl:left-[300px] xl:top-52 semibig:top-56 semibig:left-80 big:top-64 big:left-96 big3:left-[390px] 1xl:left-[430px] 1xl:top-72 2xl:left-[440px]"
          ></i>
          <img
            width="746"
            height="460"
            class="rounded-xl md:w-11/12 md:ml-auto"
            src="https://dpay.uz/wp/wp-content/uploads/2022/02/video-cover-app-showcase.jpg"
            alt="image"
          />
        </a>
        <div
          v-show="isShown"
          class="fixed z-40 overflow-hidden top-0 left-0 right-0 bottom-0 bg-black"
        >
          <div class="flex items-center justify-center relative h-full">
            <i
              @click="(isShown = false), blockScroll()"
              class="fa-solid fa-xmark cursor-pointer text-2xl absolute top-7 right-10"
            ></i>
            <iframe
              width="660"
              height="415"
              src="https://www.youtube.com/embed/9uKMZHDIVT8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </article>
    </div>
    <Reviews />
  </section>
</template>
<style scoped>
.group,
.group * {
  transition: 0.5s;
}
.video {
  transition: 0.3s;
}
</style>
