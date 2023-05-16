<script setup>
import { ref, provide } from "vue";
import { RouterView } from "vue-router";

const theme = localStorage.getItem("theme") || false;
const isLight = theme ? ref(false) : ref(true);
let html = document.querySelector("html");
html.className = isLight.value ? "" : "dark";
provide("theme", theme);
const switchLight = () => {
  isLight.value = !isLight.value;
  let html = document.querySelector("html");
  html.className = isLight.value ? "" : "dark";
  isLight.value
    ? localStorage.removeItem("theme")
    : localStorage.setItem("theme", "dark");
};
</script>

<template>
  <section class="wraper">
    <nav
      class="flex justify-between py-4 shadow-md bg-white dark:bg-[rgb(19,16,34)] dark:text-white absolute top-0 right-0 left-0"
    >
      <div class="container flex justify-between">
        <div class="flex items-center gap-9">
          <RouterLink class="font-bold text-2xl" to="/wp">dpay</RouterLink>
          <RouterLink class="font-semibold opacity-90 text-base" to="/"
            >Mobile App Showcase</RouterLink
          >
        </div>
        <div class="flex items-center">
          <span
            class="font-semibold dark:opacity-70 text-lg spacing tracking-wide"
            >Light</span
          >
          <label class="relative items-center cursor-pointer mx-3">
            <input
              type="checkbox"
              :checked="theme ? true : false"
              value=""
              class="sr-only peer"
            />
            <div
              @click="switchLight"
              class="w-14 h-7 bg-indigo-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
            ></div>
          </label>
          <span
            class="font-semibold opacity-80 dark:opacity-100 text-lg spacing tracking-wide"
            >Dark</span
          >
        </div>
      </div>
    </nav>
    <RouterView />
  </section>
</template>

<style src="./style.css"></style>
