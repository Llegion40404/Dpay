<script setup>
import ClientsUse from "@/components/ClientsUse.vue";
import Email from "@/components/Email.vue";
import Features from "@/components/Features.vue";
import HowWork from "@/components/HowWork.vue";
import Wrapper from "@/components/Wrapper.vue";

import { ref } from "vue";

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
  <nav
    id="top"
    class="absolute z-50 flex justify-between py-4 sm:px-3 phone:py-3 md2:py-5 shadow-md dark:shadow-none bg-white dark:bg-[rgb(19,16,34)] dark:text-white top-0 right-0 left-0"
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
        <div class="mr-20 flex items-center">
          <span
            class="dark:bg-white phone:hidden md:inline bg-gray-500 mx-3 px-2 rounded-full py-1 text-white dark:text-black cursor-pointer"
            >RU</span
          >
          <span
            class="dark:bg-white phone:hidden md:inline bg-gray-500 text-white px-2 rounded-full py-1 dark:text-black cursor-pointer"
            >UZ</span
          >
          <div
            class="ml-12 group cursor-pointer relative phone:hidden md:block"
          >
            Contact us
            <div
              class="bg-slate-200 text-black px-4 h-0 group-hover:h-24 group-hover:py-2 group-active:h-24 group-active:py-2 overflow-hidden rounded duration-500 absolute top-8 w-52 shadow-lg flex flex-col right-10"
            >
              <a href="tel:+998712078080"
                ><i class="fa-solid fa-phone mr-3"></i>+998 (71) 2078080</a
              >
              <a href="mailto:info@dgb.uz"
                ><i class="fa-sharp fa-regular fa-envelope mr-3 my-2"></i>
                info@dgb.uz</a
              >
              <a href="https://t.me/dpaybot"
                ><i class="fa-brands fa-telegram mr-3"></i>dpaybot</a
              >
            </div>
          </div>
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
          ? 'fixed top-0 left-0 translate-x-0 z-30 h-screen w-screen bg-black bg-opacity-60'
          : 'fixed top-0 left-0 bg-red-400 h-0 w-0 translate-x-[100vw]'
      "
    >
      <div
        :class="
          isShown
            ? 'bg-white dark:bg-[rgb(19,16,34)] h-screen absolute right-0 translate-x-0 duration-700 p-20 w-[90vw]'
            : 'translate-x-[100vw] bg-white dark:bg-[rgb(19,16,34)] h-screen absolute w-[90vw] right-0 p-20 duration-700'
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
  <Wrapper />
  <Features />
  <HowWork />
  <ClientsUse />
  <Email />
</template>

<style src="../style.css"></style>
