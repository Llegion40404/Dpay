<script setup>
import { resource } from "./resources";
const logos = resource.logos;
const feature = resource.features;
</script>
<template>
  <section id="more" class="container py-24">
    <ul class="flex justify-between">
      <li
        class="px-3 py-7 border-opacity-80 border-gray-300 dark:border-opacity-20 dark:border-white border-[1px] rounded-lg"
        v-for="logo in logos"
      >
        <img width="190" class="min-w-[190px]" :src="logo" alt="logoipsum" />
      </li>
    </ul>
    <article class="pt-32 flex justify-around">
      <div class="w-7/12">
        <img src="../img/phone-features.png" alt="phone image" />
      </div>
      <article class="text-white w-3/5">
        <h4 class="font-bold mb-8 dark:text-white text-indigo-500">
          App Features
        </h4>
        <p
          class="opacity-80 text-slate-400 dark:opacity-70 font-bold dark:font-semibold text-lg mb-10"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
          volutpat ligula est. Mattis fermentum, at nec lacus.
        </p>
        <div class="flex flex-wrap justify-between">
          <div
            v-for="f in feature"
            class="w-5/12 mb-12 flex items-start gap-6 justify-between"
          >
            <img
              class="dark:bg-[rgb(31,28,45)] bg-slate-100 p-4 box-border rounded-lg"
              :src="f.thumb"
              alt="icon"
            />
            <div>
              <h2
                class="font-bold text-xl text-indigo-500 dark:text-white mb-4"
              >
                {{ f.title }}
              </h2>
              <p
                class="dark:text-indigo-200 text-gray-700 dark:opacity-40 font-light text-lg"
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
