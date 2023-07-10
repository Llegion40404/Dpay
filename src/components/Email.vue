<script setup>
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const activeIdx = ref(-20);
const showText = (idx) => {
  if (activeIdx.value != idx) {
    activeIdx.value = idx;
  } else if (activeIdx.value == idx) {
    activeIdx.value = -20;
  }
};
</script>
<template>
  <section class="dark:text-white pt-12 pb-40">
    <div class="container md:px-3">
      <section class="flex phone:w-full items-center flex-col">
        <article
          class="font-bold px-3 pt-40 phone:pt-10 phone:text-center md:text-left md:pl-3 md:flex md:flex-col md:justify-center"
        >
          <h3
            class="text-[#604a8b] mb-10 text-center dark:text-white phone:text-xl poco:text-2xl md:text-3xl md:pr-40"
          >
            {{ data.popularQuests }}
          </h3>
        </article>
        <article class="my-10 phone:mx-2 md:w-11/12">
          <div
            @click="showText(idx)"
            :class="
              activeIdx == idx
                ? 'border dark:border-white border-gray-400 border-opacity-30 dark:border-opacity-30 border-t-0 first:border-t cursor-pointer first:rounded-lg first:rounded-b-none last:rounded-b-lg relative overflow-hidden'
                : 'border dark:border-white border-gray-400 border-opacity-30 dark:border-opacity-30 first:border-t border-t-0 cursor-pointer first:rounded-lg first:rounded-b-none last:rounded-b-lg relative overflow-hidden'
            "
            v-for="(it, idx) in data.divisions"
          >
            <div class="py-4 px-3 w-9/12 h-auto phone2:py-5 font-semibold">
              {{ it.title }}
              <span
                :class="
                  activeIdx == idx
                    ? 'rotate-180 bg-indigo-500 text-white pr-3 pl-[14px] w-10 h-10 text-xs py-3 rounded-full absolute right-3 phone:top-2 duration-500 phone2:top-3'
                    : 'dark:bg-[rgb(31,28,45)] dark:text-white text-neutral-700 bg-blue-400 bg-opacity-10 px-[15px] w-10 h-10 text-xs py-3 rounded-full absolute right-3 top-2 duration-500 phone2:top-3'
                "
              >
                ▼
              </span>
            </div>
            <div
              :class="
                activeIdx == idx
                  ? 'max-h-[400px] border-t dark:border-white ease-in-out dark:border-opacity-30 my-1 py-4 px-3 duration-700 md:pr-10'
                  : 'max-h-0 duration-700 px-3 md:pr-10 ease-in-out'
              "
            >
              <span
                :class="
                  activeIdx == idx
                    ? 'dark:opacity-50 opacity-80 duration-500 text-gray-900 dark:text-indigo-300 text-sm md:text-base'
                    : 'opacity-50 duration-500 text-sm md:text-base'
                "
              >
                {{ it.text }}
              </span>
            </div>
          </div>
        </article>
        <button
          class="px-10 py-5 bg-indigo-500 font-semibold text-white text-xl rounded-md"
        >
          Свяжитесь с нами
        </button>
      </section>
    </div>
  </section>
</template>
