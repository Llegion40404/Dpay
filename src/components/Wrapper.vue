<script setup></script>
<template>
  <main
    class="h-[90vh] phone:h-auto phone:overflow-visible phone:text-center overflow-hidden flex justify-between bg-gradient-to-b from-[rgb(254,254,255)] to-[rgb(239,239,253)] dark:bg-gradient-to-b dark:from-[rgb(35,32,49)] dark:to-[rgb(29,22,49)]"
  >
    <div
      class="container pt-64 phone:pt-20 phone:px-3 phone:flex-col poco:pt-32 flex justify-between"
    >
      <article class="font-bold text-indigo-500 pt-8">
        <p class="mb-7 dark:text-white">
          Manage All Your Money in One App{{ wTheme }}
        </p>
        <p class="tracking-tight text-lg">
          We offer you a new generation of the mobile banking.<br />
          Save, spend & manage money in your pocket.
        </p>
        <div
          class="flex gap-9 phone:gap-4 pt-16 phone:flex-col poco:pt-10 poco:flex-row poco:justify-center"
        >
          <a
            class="text-white bg-black dark:bg-gray-300 dark:text-black flex px-4 py-2 rounded-lg"
            href="https://apple.com"
          >
            <i class="fa-brands fa-apple fa-2x mr-3"></i>
            <div>
              <p class="text-[10px] dark:font-bold tracking-wide leading-3">
                Download on the
              </p>
              <h4 class="tracking-wide font-semibold">App Store</h4>
            </div>
          </a>
          <a
            class="text-white bg-black dark:bg-gray-300 dark:text-black flex px-4 py-2 rounded-lg"
            href="https://play.google.com"
          >
            <img
              class="h-9 mr-3"
              width="30"
              src="../img/playstore.jpg"
              alt="play store icon"
            />
            <div>
              <p class="font-light dark:font-bold text-[11px] leading-3">
                GET IT ON
              </p>
              <h4 class="font-semibold">Google Play</h4>
            </div>
          </a>
        </div>
        <button class="mt-20 poco:mt-12">
          <span
            class="bg-slate-500 text-white font-extralight text-2xl rounded-full px-3 mr-2 py-1 dark:text-inherit dark:bg-white"
            >&DoubleDownArrow;</span
          >
          <a href="#more">Discover more</a>
        </button>
      </article>
      <div class="h-full w-5/12 phone:w-full phone:h-96">
        <div
          class="w-5/6 bg-[right_180px_top_150px] h-full bg-no-repeat bg-cover bg-[url('https://dpay.uz/wp/wp-content/uploads/2022/02/hero-phone-1.png')] phone:w-full phone:bg-[right_120px_top_160px] phone:bg-[length:280px_500px] phone2:bg-[right_200px_top_150px] poco:bg-[right_150px_top_150px] poco:bg-[length:430px_600px] poco2:bg-[length:430px_670px] poco2:bg-[right_250px_top_200px]"
        >
          <div
            class="w-[600px] h-full bg-no-repeat phone:w-full phone:bg-[right_1px_top_80px] phone:bg-[length:310px_450px] phone2:bg-[length:360px_520px] poco:bg-[length:420px_700px] poco2:bg-[right_1px_top_80px] poco2:bg-[length:500px_700px] bg-cover bg-[url('https://dpay.uz/wp/wp-content/uploads/2022/02/hero-phone-1.png')]"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>
<!-- sm:bg-[right_300px_top_200px] sm:bg-[length:500px_700px] -->
<!-- sm:bg-[right_10px_top_80px] sm:bg-[length:580px_800px] -->
