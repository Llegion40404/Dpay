<script setup>
import { provide, ref } from "vue";
import { RouterView, RouterLink } from "vue-router";
import { resource } from "@/components/resources";

let id = ref("");
let lang = ref(localStorage.getItem("lang") || "ru");
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
const hideMenu = () => {
  isShown.value = false;
};
const blockScroll = (bool) => {
  bool
    ? document.querySelector("body").classList.add("overflow-hidden")
    : document.querySelector("body").classList.remove("overflow-hidden");
};
const switchLang = (l) => {
  lang.value = l;
  localStorage.setItem("lang", l);
};
</script>

<template>
  <section class="wraper">
    <nav
      id="top"
      class="absolute z-50 flex justify-between py-4 sm:px-3 phone:py-3 md:px-0 md2:py-5 shadow-md dark:shadow-none bg-white dark:bg-[rgb(13,11,22)] dark:text-white top-0 right-0 left-0"
    >
      <div
        class="container semimd:px-0 lg:px-3 flex justify-between px-5 poco:px-2 sm2:px-4 poco2:px-5 sm:px-0"
      >
        <div class="flex items-center gap-9">
          <RouterLink
            class="font-bold text-2xl phone:text-xl poco2:text-2xl"
            to="/"
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
              @click="switchLang('ru')"
              class="dark:bg-white phone:hidden semimd:inline bg-gray-500 mx-3 px-2 rounded-full py-1 text-white dark:text-black cursor-pointer"
              >RU</span
            >
            <span
              @click="switchLang('uz')"
              class="dark:bg-white phone:hidden semimd:inline bg-gray-500 text-white px-2 rounded-full py-1 dark:text-black cursor-pointer"
              >UZ</span
            >
            <div
              class="ml-12 group cursor-pointer relative phone:hidden sm2:block"
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
            @click="(isShown = !isShown), blockScroll(true)"
            class="fa-solid fa-bars text-2xl semimd:hidden"
          ></i>
        </div>
      </div>
      <div
        :class="
          isShown
            ? 'fixed semimd:hidden top-0 left-0 translate-x-0 z-30 h-screen w-screen bg-black bg-opacity-60'
            : 'fixed top-0 left-0 bg-red-400 h-0 w-0 translate-x-[100vw]'
        "
      >
        <div
          :class="
            isShown
              ? 'bg-white dark:bg-[rgb(19,16,34)] h-screen absolute right-0 translate-x-0 duration-700 phone:px-5 p-16 w-[90vw] md:w-[70vw]'
              : 'translate-x-[100vw] bg-white dark:bg-[rgb(19,16,34)] h-screen absolute w-[90vw] right-0 phone:px-5 p-20 duration-700'
          "
        >
          <i
            @click="hideMenu(), blockScroll(false)"
            class="fa-solid fa-xmark fa-2x absolute top-3 right-5"
          ></i>
          <ul class="flex justify-between">
            <li
              v-for="s in lang == 'ru'
                ? resource.ru.navLinks
                : resource.uz.navLinks"
            >
              <p
                class="md:text-3xl sm:text-2xl text-lg p-1 border-b-4 border-sky-400 rounded-r-xl h-11"
              >
                {{ s }}
              </p>
            </li>
          </ul>

          <div
            class="h-auto py-2 w-10/12 absolute bottom-4 sm2:hidden overflow-hidden duration-500 flex flex-col"
          >
            <div class="flex justify-center pb-5 semimd:hidden">
              <span
                @click="switchLang('ru'), hideMenu(), blockScroll(false)"
                class="dark:bg-white bg-gray-500 mx-3 px-2 rounded-full py-1 text-white dark:text-black cursor-pointer"
                >RU</span
              >
              <span
                @click="switchLang('uz'), hideMenu(), blockScroll(false)"
                class="dark:bg-white bg-gray-500 text-white px-2 rounded-full py-1 dark:text-black cursor-pointer"
                >UZ</span
              >
            </div>
            <a href="https://t.me/dpaybot"
              ><i class="fa-brands fa-telegram mr-3"></i>dpaybot</a
            >
            <a href="mailto:info@dgb.uz"
              ><i class="fa-sharp fa-regular fa-envelope mr-3 my-2"></i>
              info@dgb.uz</a
            >
            <a href="tel:+998712078080"
              ><i class="fa-solid fa-phone mr-3"></i>+998 (71) 2078080</a
            >
          </div>
        </div>
      </div>
      <div
        class="group fixed xl:top-[85vh] z-50 duration-300 lg:right-20 phone:right-3 phone:top-[80vh]"
        :class="isShown == false ? 'block' : 'hidden'"
      >
        <a
          href="#top"
          class="fa-solid fa-angle-up rounded-full bg-gray-700 bg-opacity-90 text-white px-[20px] py-5"
          ><span
            class="absolute top-5 right-20 text-black dark:text-white text-xs tracking-wider opacity-0 group-hover:opacity-100 duration-700"
            >Top
          </span></a
        >
      </div>
    </nav>
    <RouterView :data="lang == 'ru' ? resource.ru : resource.uz" />
    <footer class="border-t text-white border-gray-300 dark:border-gray-700">
      <div
        class="container flex flex-row-reverse justify-between px-2 md:px-5 py-5"
      >
        <div class="hidden semimd:flex justify-between gap-10">
          <div class="flex flex-col">
            <h4
              class="md:text-3xl text-black dark:text-white max-w-min sm:text-2xl text-lg p-1 border-b-4 border-indigo-400 rounded-r-xl h-11"
            >
              {{
                lang == "ru" ? resource.ru.navLinks[0] : resource.uz.navLinks[0]
              }}
            </h4>
            <ul class="pt-3">
              <li
                class="mb-3 dark:text-white text-black text-lg"
                v-for="item in lang == 'ru'
                  ? resource.ru.documents.services
                  : resource.uz.documents.services"
              >
                <a
                  :href="
                    item.link.includes('https')
                      ? item.link
                      : '/Services#' + item.link
                  "
                >
                  {{ item?.text }}</a
                >
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h4
              class="md:text-3xl text-black dark:text-white max-w-min sm:text-2xl text-lg p-1 border-b-4 border-indigo-400 rounded-r-xl h-11"
            >
              {{
                lang == "ru" ? resource.ru.navLinks[1] : resource.uz.navLinks[1]
              }}
            </h4>
            <ul class="pt-3">
              <li
                class="mb-3 dark:text-white text-black text-lg"
                v-for="item in lang == 'ru'
                  ? resource.ru.documents.help
                  : resource.uz.documents.help"
              >
                <a :href="item.link" download>{{ item?.text }}</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h4
              class="md:text-3xl text-black dark:text-white max-w-max sm:text-2xl text-lg p-1 border-b-4 border-indigo-400 rounded-r-xl h-11"
            >
              {{
                lang == "ru" ? resource.ru.navLinks[2] : resource.uz.navLinks[2]
              }}
            </h4>
            <ul class="pt-3">
              <li
                class="mb-3 dark:text-white text-black text-lg"
                v-for="item in lang == 'ru'
                  ? resource.ru.documents.about
                  : resource.uz.documents.about"
              >
                <a :href="item.link">{{ item?.text }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="min-w-fit self-end">
          <a
            class="text-white bg-black semimd:h-auto dark:bg-slate-500 md:h-12 dark:text-black flex px-4 py-2 rounded-lg"
            href="https://apple.com"
          >
            <i class="fa-brands fa-apple fa-2x mr-3"></i>
            <div>
              <p class="text-[10px] dark:font-bold tracking-wide leading-3">
                Download on the
              </p>
              <h4 class="tracking-wide font-semibold md:text-sm semimd:text-lg">
                App Store
              </h4>
            </div>
          </a>
          <a
            class="text-white my-5 bg-black semimd:h-auto dark:bg-slate-500 md:h-12 dark:text-black flex px-4 py-2 rounded-lg"
            href="https://play.google.com"
          >
            <img
              class="h-9 mr-3"
              width="30"
              src="./img/playstore.jpg"
              alt="play store icon"
            />
            <div class="text-left">
              <p class="font-light dark:font-bold text-[11px] leading-3">
                GET IT ON
              </p>
              <h4 class="font-semibold md:text-sm semimd:text-lg">
                Google Play
              </h4>
            </div>
          </a>
          <p
            v-for="contact in lang == 'ru'
              ? resource?.ru?.contacts
              : resource?.uz?.contacts"
            class="font-semibold my-1 text-sm text-gray-500 dark:text-gray-500"
          >
            {{ contact }}
          </p>
        </div>
      </div>
    </footer>
  </section>
</template>

<style src="./style.css"></style>
