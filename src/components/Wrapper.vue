<script setup>
import { computed, inject } from "vue";
const wTheme = inject("theme");
let getTheme = computed(() => {
  if (wTheme) {
    return require("../img/apple.jpg");
  } else {
    return require("../img/apple-light.png");
  }
});
</script>
<template>
  <main
    class="h-[90vh] overflow-hidden flex justify-between bg-gradient-to-b from-[rgb(254,254,255)] to-[rgb(239,239,253)] dark:bg-gradient-to-b dark:from-[rgb(35,32,49)] dark:to-[rgb(29,22,49)]"
  >
    <div class="container pt-64 flex justify-between">
      <article class="font-bold text-indigo-500 pt-8">
        <p class="mb-7 dark:text-white">Manage All Your Money in One App</p>
        <p class="tracking-tight text-lg">
          We offer you a new generation of the mobile banking.<br />
          Save, spend & manage money in your pocket.
        </p>
        {{ wTheme }}
        <div class="flex gap-9 pt-16">
          <a
            class="text-white bg-black dark:bg-white dark:text-black flex px-4 py-2 rounded-lg"
            href="https://apple.com"
          >
            <img
              class="h-8 mr-3"
              width="30"
              :src="getTheme"
              alt="play store icon"
            />
            <div class="dark:opacity-80">
              <p class="text-[10px] dark:font-bold tracking-wide leading-3">
                Download on the
              </p>
              <h4 class="tracking-wide font-semibold">App Store</h4>
            </div>
          </a>
          <a
            class="text-white bg-black dark:bg-white dark:text-black flex px-4 py-2 rounded-lg"
            href="https://play.google.com"
          >
            <img
              class="h-9 mr-3"
              width="30"
              src="../img/playstore.jpg"
              alt="play store icon"
            />
            <div class="dark:opacity-80">
              <p class="font-light dark:font-bold text-[11px] leading-3">
                GET IT ON
              </p>
              <h4 class="font-semibold">Google Play</h4>
            </div>
          </a>
        </div>
        <button class="mt-20">
          <span
            class="bg-slate-500 text-white font-extralight text-2xl rounded-full px-3 mr-2 py-1 dark:text-inherit dark:bg-white"
            >&DoubleDownArrow;</span
          >
          Discover more
        </button>
      </article>
      <div class="h-full w-5/12">
        <div
          class="w-5/6 h-full bg-[right_180px_top_150px] bg-no-repeat bg-cover bg-[url('https://dpay.uz/wp/wp-content/uploads/2022/02/hero-phone-1.png')]"
        >
          <div
            class="w-[600px] h-full bg-no-repeat bg-cover bg-[url('https://dpay.uz/wp/wp-content/uploads/2022/02/hero-phone-1.png')]"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>
