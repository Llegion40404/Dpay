<script setup></script>
<template>
  <main
    class="h-[90vh] 2xl:h-[93vh] xl:h-[110vh] phone:h-auto sm:h-[133vh] md:h-[80vh] semimd:h-screen phone:overflow-visible phone:text-center md:text-left overflow-hidden flex justify-between bg-gradient-to-b from-[rgb(254,254,255)] to-[rgb(239,239,253)] dark:bg-gradient-to-b dark:from-[rgb(35,32,49)] dark:to-[rgb(29,22,49)]"
  >
    <div
      class="container relative lg:px-3 semimd:px-0 phone:px-3 phone:flex-col md:flex-row flex md:justify-between sm:justify-normal"
    >
      <article
        class="semimd:flex xl:w-[750px] phone:pt-40 self-center md:pt-0 semimd:flex-col font-bold text-indigo-500 semimd:pb-16 md:w-9/12"
      >
        <p class="mb-7 dark:text-white text-2xl">
          Manage All Your Money in One App
        </p>
        <p class="tracking-tight text-lg">
          Dpay - это платежная система и мобильный банкинг в Узбекистане,
          быстрая оплата через мобильное приложение с использованием пластиковой
          карты UZCARD и HUMO.
        </p>
        <div
          class="flex gap-9 md2:justify-start semimd:gap-8 semimd:pt-20 phone:gap-4 pt-16 phone:flex-col poco:pt-10 poco:flex-row poco:justify-center md:items-center"
        >
          <a
            class="text-white bg-black semimd:h-auto dark:bg-slate-200 md:h-12 dark:text-black flex px-4 py-2 rounded-lg"
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
            class="text-white bg-black semimd:h-auto dark:bg-slate-200 md:h-12 dark:text-black flex px-4 py-2 rounded-lg"
            href="https://play.google.com"
          >
            <img
              class="h-9 mr-3"
              width="30"
              src="../img/playstore.jpg"
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
        </div>
        <p
          class="absolute md:top-[90%] md:left-4 phone:bottom-72 phone2:bottom-72 phone2:right-32 poco:right-40 poco2:right-52 sm:top-[430px] sm:right-60 sm2:right-72 phone:right-1/4"
        >
          <a href="#more">
            <span
              class="bg-slate-500 text-white font-extralight text-2xl rounded-full px-[13px] mr-2 py-2 dark:text-inherit dark:bg-white"
              ><i class="fa-solid fa-angle-down"></i
            ></span>
            Discover more
          </a>
        </p>
      </article>
      <div
        class="h-full w-5/12 phone:w-full md:h-full phone:h-96 pt-16 sm:mt-12 sm:h-full md:mt-0"
      >
        <div
          class="w-5/6 2xl:bg-[right_280px_top_300px] 2xl:bg-[length:570px_800px] xl:bg-[length:570px_750px] xl:bg-[right_260px_top_220px] semimd:bg-[right_230px_top_200px] semimd:bg-[length:500px_700px] md:bg-[right_150px_top_140px] md:bg-[length:430px_600px] h-full bg-no-repeat bg-cover bg-[url('https://dpay.uz/wp/wp-content/uploads/2022/02/hero-phone-1.png')] phone:w-full phone:bg-[right_120px_top_160px] phone:bg-[length:280px_500px] phone2:bg-[right_200px_top_150px] poco:bg-[right_150px_top_150px] poco:bg-[length:430px_600px] poco2:bg-[length:430px_670px] poco2:bg-[right_250px_top_200px] sm:bg-[right_300px_top_200px] sm:bg-[length:500px_700px] sm2:bg-[right_300px_top_150px] sm2:bg-[length:580px_900px]"
        >
          <div
            class="w-[600px] 2xl:bg-[right_0px_top_100px] xl:bg-[length:630px_950px] semimd:bg-[right_0px_top_60px] semimd:bg-[length:550px_800px] md:bg-[right_0px_top_30px] md:bg-[length:450px_650px] h-full bg-no-repeat phone:w-full phone:bg-[right_1px_top_80px] phone:bg-[length:300px_450px] phone2:bg-[length:360px_520px] poco:bg-[length:420px_700px] poco2:bg-[right_1px_top_80px] poco2:bg-[length:500px_700px] sm:bg-[right_10px_top_40px] sm:bg-[length:580px_800px] sm2:bg-[right_20px_top_0px] sm2:bg-[length:600px_900px] bg-cover bg-[url('https://dpay.uz/wp/wp-content/uploads/2022/02/hero-phone-1.png')]"
          ></div>
        </div>
      </div>
    </div>
  </main>
  <div
    class="group fixed xl:top-[85vh] z-50 lg:right-20 phone:right-3 phone:top-[80vh]"
  >
    <a
      v-show="!isShown"
      href="#top"
      class="fa-solid fa-angle-up rounded-full bg-gray-700 bg-opacity-90 text-white px-[20px] py-5"
      ><span
        class="absolute top-5 right-20 text-black dark:text-white text-xs tracking-wider opacity-0 group-hover:opacity-100 duration-300"
        >Top</span
      ></a
    >
  </div>
</template>
