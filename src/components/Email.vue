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
      <section class="flex justify-between">
        <article class="font-bold pt-40">
          <h3 class="text-indigo-500 dark:text-white">
            Any questions? <br />Check out the FAQs
          </h3>
          <p
            class="text-xl text-gray-500 dark:text-indigo-400 my-7 dark:opacity-60"
          >
            Still have unanswered questions and need to get in touch?
          </p>
          <button
            class="px-5 py-3 bg-indigo-500 font-semibold text-white rounded-md"
          >
            Contact us now
          </button>
        </article>
        <article class="w-8/12 pl-20">
          <ul class="flex flex-col p-5">
            <li
              @click="showText(idx)"
              v-for="(it, idx) in resource.divisions"
              class="division group flex flex-col border-b border-x first:border-t first:rounded-t-lg last:rounded-b-lg dark:border-gray-600 justify-center cursor-pointer text-lg font-semibold relative"
            >
              <div
                :class="
                  activeIdx == idx
                    ? 'overflow-hidden h-80 py-6'
                    : 'overflow-hidden h-20 py-6'
                "
              >
                <p class="pl-5">{{ it.text }}</p>
                <span
                  :class="
                    activeIdx == idx
                      ? 'rotate-180 bg-indigo-500 text-white  pr-3 pl-[14px] w-10 h-10 text-xs py-3 rounded-full absolute top-4 right-3'
                      : 'dark:bg-[rgb(31,28,45)]  dark:text-white text-neutral-700 bg-blue-200 bg-opacity-10 px-4 w-10 h-10 text-xs py-3 rounded-full absolute top-4 right-3'
                  "
                >
                  ▼
                </span>
                <div class="my-7 px-5 pt-5 border-t dark:border-gray-600">
                  <p
                    class="text-base dark:text-indigo-200 opacity-70 font-normal"
                  >
                    Nunc duis id aenean gravida tincidunt eu, tempor
                    ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                    Aliquet pretium cursus adipiscing gravida et consequat
                    lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                    lectus non. Massa cursus molestie lorem scelerisque
                    pellentesque. Nisi, enim, arcu purus gravida adipiscing
                    euismod montes, duis egestas. Vehicula eu etiam quam
                    tristique tincidunt suspendisse ut consequat. <br /><br />
                    Ornare senectus fusce dignissim ut. Integer consequat in eu
                    tortor, faucibus et lacinia posuere. Turpis sit viverra
                    lorem suspendisse lacus aliquam auctor vulputate. Quis
                    egestas aliquam nunc purus lacus, elit leo elit facilisi.
                    Dignissim amet adipiscing massa integer.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </section>

      <section
        class="mt-20 email bg-[rgb(243,246,255)] dark:bg-indigo-200 p-20 rounded-lg dark:bg-opacity-10"
      >
        <div class="flex items-center justify-around">
          <div class="flex w-5/12">
            <i class="fa-solid fa-bell fa-5x text-yellow-400 mr-10"></i>
            <h4 class="font-bold text-indigo-500 dark:text-white text-lg mt-2">
              Subscribe to our newsletter to stay informed about latest updates
            </h4>
          </div>
          <form>
            <label for="email" class="relative">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                class="rounded-lg text-lg dark:border dark:border-gray-600 dark:bg-[rgb(42,40,56)] pr-52 pl-12 py-3 text-gray-700 dark:focus:bg-gray-200"
              />
              <i
                class="fa-solid absolute top-[2px] text-gray-700 dark:text-white left-5 fa-envelope"
              ></i>
              <button
                class="py-[13px] font-medium text-lg px-7 text-white bg-indigo-500 rounded-r-lg absolute -right-1"
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
      <p class="font-semibold dark:text-gray-200 text-center mt-10">
        © All rights reserved. Made with difficulty by Alx
      </p>
    </footer>
  </section>
</template>
<style scoped>
.division,
.email *,
.division * {
  transition: ease 0.5s all;
}
</style>
