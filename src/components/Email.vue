<script setup>
import { ref } from "vue";
import { resource } from "./resources";

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
  <section class="dark:text-white pb-12">
    <div class="container flex flex-col">
      <section
        class="flex phone:w-full justify-between phone:flex-col md:flex-row"
      >
        <article
          class="font-bold pt-40 phone:pt-10 phone:text-center md:text-left md:pl-3 md:flex md:flex-col md:justify-center"
        >
          <h3 class="text-indigo-500 dark:text-white phone:text-lg md:pr-40">
            Популярные вопросы
          </h3>
          <p
            class="text-xl text-slate-500 dark:text-indigo-400 my-7 dark:opacity-60 poco2:px-4 poco2:text-center md:text-left md:px-0"
          >
            Still have unanswered questions and need to get in touch?
          </p>
          <button
            class="px-5 py-3 bg-indigo-500 font-semibold text-white rounded-md md:mr-40"
          >
            Contact us now
          </button>
        </article>
        <article class="my-10 phone:mx-2 md:w-11/12">
          <div
            @click="showText(idx)"
            :class="
              activeIdx == idx
                ? 'border dark:border-white border-gray-400 border-opacity-30 dark:border-opacity-30 border-t-0 first:border-t cursor-pointer first:rounded-lg first:rounded-b-none last:rounded-b-lg relative overflow-hidden'
                : 'border dark:border-white border-gray-400 border-opacity-30 dark:border-opacity-30 first:border-t border-t-0 cursor-pointer first:rounded-lg first:rounded-b-none last:rounded-b-lg relative overflow-hidden'
            "
            v-for="(it, idx) in resource.ru.divisions"
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
                  ? 'max-h-[500px] border-t dark:border-white dark:border-opacity-30 my-1 py-4 px-3 duration-700 md:pr-10'
                  : 'max-h-0 duration-700 px-3 md:pr-10'
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
      </section>

      <section
        class="mt-20 flex justify-center phone:mt-3 email bg-[rgb(243,246,255)] xl:px-20 xl:py-10 dark:bg-indigo-200 p-20 poco:pl-5 poco:pb-5 rounded-lg dark:bg-opacity-10 phone:p-0 phone:px-3 phone:mx-2"
      >
        <div class="flex phone:flex-col md:flex-row md:px-5 phone:pt-5">
          <div class="flex phone:w-full md:w-1/2 phone:mb-5">
            <i
              class="fa-solid fa-bell fa-5x text-yellow-400 mr-10 phone:text-7xl phone:mr-4 phone:mt-4"
            ></i>
            <h4
              class="font-bold text-indigo-500 dark:text-white mt-2 phone:text-base phone2:mt-8 sm:px-4 xl:pr-20"
            >
              Subscribe to our newsletter to stay informed about latest updates
            </h4>
          </div>
          <form class="phone:pb-5 max-w-[100%] md:w-1/2">
            <label for="email" class="relative">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                class="rounded-lg text-lg border w-full phone:placeholder:text-base dark:border dark:border-gray-600 dark:bg-[rgb(42,40,56)] pl-12 py-3 phone:pl-9 phone:py-2 phone2:py-3 md:mt-8 poco2:pl-12 sm:mt-2 text-gray-700 dark:focus:bg-gray-200"
              />
              <i
                class="fa-solid absolute top-[2px] text-gray-700 dark:text-white phone:left-3 phone:top-[3px] poco2:left-5 fa-envelope"
              ></i>
              <button
                class="py-[13px] phone2:py-[15px] font-medium text-lg md2:px-7 phone:px-4 text-white bg-indigo-500 rounded-r-lg absolute right-[0px] phone:text-base sm:mt-2 md:mt-8 phone:py-[11px]"
                type="submit"
              >
                Subscribe
              </button>
            </label>
          </form>
        </div>
      </section>
    </div>
    <footer class="border-t border-gray-300 dark:border-gray-700">
      <div class="container px-2">
        <p class="font-semibold text-sm text-gray-500 dark:text-gray-500 mt-10">
          Телефон: +998 (71) 2078080 <br />E-mail:info@dgb.uz Telegram: @dpaybot
          <br />Рабочий график: с ПН по ПТ с 9:00 до 18:00 <br />Круглосуточная
          горячая линия: +998 (71) 200-95-00, +998 (71) 200-89-00 <br />
          OOO “RAQAMLI BIZNES AGREGATOR”
        </p>
      </div>
    </footer>
  </section>
</template>
