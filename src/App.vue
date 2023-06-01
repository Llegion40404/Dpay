<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

let theme = localStorage.getItem("theme") || false;
let isLight = theme ? ref(false) : ref(true);
let isShown = ref(false);
let html = document.querySelector("html");
html.className = isLight.value ? "" : "dark";
const switchLight = () => {
  isLight.value = !isLight.value;
  let html = document.querySelector("html");
  html.className = isLight.value ? "" : "dark";
  isLight.value
    ? localStorage.removeItem("theme")
    : localStorage.setItem("theme", "dark");
};
const blockScroll = () => {
  document.querySelector("body").classList.toggle("overflow-hidden");
};
</script>

<template>
  <section class="wraper">
    <nav
      id="top"
      class="absolute flex justify-between py-4 sm:px-3 phone:py-3 md2:py-5 shadow-md dark:shadow-none bg-white dark:bg-[rgb(19,16,34)] dark:text-white top-0 right-0 left-0"
      :class="isShown ? 'overflow-visible' : 'overflow-hidden'"
    >
      <div
        class="container semimd:px-0 lg:px-3 flex justify-between px-5 poco:px-2 sm2:px-4 poco2:px-5 sm:px-0"
      >
        <div class="flex items-center gap-9">
          <RouterLink
            class="font-bold text-2xl phone:text-xl poco2:text-2xl"
            to="/wp"
            >dpay</RouterLink
          >
          <RouterLink
            class="font-semibold opacity-90 text-base phone:hidden semimd:block"
            to="/"
            >Mobile App Showcase
          </RouterLink>
        </div>
        <div class="flex items-center">
          <div class="mr-20 flex items-center phone:hidden lg:flex">
            <span
              class="dark:bg-white bg-black mx-3 px-2 rounded-full py-1 dark:text-black cursor-pointer"
              >RU</span
            >
            <span
              class="bg-white px-2 rounded-full py-1 text-black cursor-pointer"
              >UZ</span
            >
            <a class="ml-12" href="tel:+9989999999">Contact Us</a>
          </div>
          <div class="flex items-center">
            <span
              class="font-semibold poco:inline dark:opacity-70 poco:text-base text-lg spacing tracking-wide phone:hidden"
              >Light</span
            >
            <label
              class="relative flex poco:ml-3 poco:mr-0 items-center cursor-pointer mx-3"
            >
              <input
                type="checkbox"
                :checked="theme ? true : false"
                class="sr-only peer"
              />
              <div
                @click="switchLight"
                class="w-14 h-7 phone:mr-3 phone:h-6 phone:w-12 bg-indigo-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 phone:peer-checked:after:translate-x-[22px] peer-checked:after:border-white after:content-[''] after:absolute after:top-1 phone:after:top-[3px] after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 phone:after:h-[18px] phone:after:w-[18px] after:transition-all"
              ></div>
            </label>
            <span
              class="font-semibold opacity-80 poco:inline poco:mr-5 poco:text-base dark:opacity-100 text-lg spacing tracking-wide phone:hidden"
              >Dark</span
            >
          </div>
          <i
            @click="(isShown = !isShown), blockScroll()"
            class="fa-solid fa-bars text-2xl semimd:hidden"
          ></i>
        </div>
      </div>
      <div
        :class="
          isShown
            ? 'fixed top-0 translate-x-0 overflow-hidden z-30 h-screen w-screen bg-black bg-opacity-60'
            : 'fixed top-0 h-screen w-screen translate-x-[10000px]'
        "
      >
        <div
          :class="
            isShown
              ? 'bg-white dark:bg-[rgb(19,16,34)] h-full absolute right-0 translate-x-0 transition-all duration-700 p-20  w-[90vw]'
              : 'translate-x-[1000px] h-screen transition-all w-[90vw] right-0 p-20 duration-700'
          "
        >
          <i
            @click="(isShown = false), blockScroll()"
            class="fa-solid fa-xmark fa-2x absolute top-5 right-10"
          ></i>
          <ul>
            <li v-for="l in 7">some links</li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView />
  </section>
</template>

<style src="./style.css"></style>
