<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <main
    class="h-[90vh] semimd:px-5 2xl:h-[93vh] xl:h-[110vh] phone:h-auto sm:h-[133vh] md:h-[80vh] semimd:h-screen phone:text-center md:text-left flex justify-between bg-gradient-to-b from-[rgb(254,254,255)] to-[rgb(239,239,253)] dark:bg-gradient-to-b dark:from-[rgb(35,32,49)] dark:to-[rgb(29,22,49)]"
  >
    <div
      class="container relative lg:px-3 semimd:px-0 phone:px-3 phone:flex-col md:flex-row flex md:justify-between sm:justify-normal"
    >
      <article
        class="semimd:flex xl:w-[750px] phone:pt-40 self-center md:pt-0 semimd:flex-col semimd:pb-16 md:w-9/12"
      >
        <p class="mb-7 dark:text-white text-[#604a8b] font-semibold text-2xl">
          {{ data.headerTitle }}
        </p>
        <p class="tracking-tight text-[#212121] dark:text-white text-lg">
          {{ data.mainTitle }}
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
          <a href="#more" class="dark:text-white text-[#212121]">
            <span
              class="bg-slate-500 font-extralight text-2xl rounded-full px-[13px] mr-2 py-2 dark:text-inherit dark:bg-white"
              ><i class="fa-solid fa-angle-down text-white dark:text-black"></i
            ></span>
            Discover more
          </a>
        </p>
      </article>
      <div
        class="h-full phone:w-full md:h-full phone:h-96 pt-16 sm:mt-12 sm:h-full md:mt-0"
      >
        <div
          class="w-5/6 big2:bg-[length:550px_950px] 1xl:bg-[length:550px_900px] lg:bg-[length:350px_700px] 2xl:bg-[left_140px_top_300px] 2xl:bg-[length:500px_800px] xl:bg-[length:400px_750px] semibig:bg-[length:500px_950px] xl:bg-[left_0px_top_220px] semimd:bg-[left_0px_top_200px] semimd:bg-[length:300px_670px] md:bg-[left_0px_top_140px] md:bg-[length:300px_600px] h-full bg-no-repeat bg-cover bg-[url('./img/case_2.png')] phone:w-full phone:bg-[right_110px_top_160px] phone:bg-[length:200px_400px] phone2:bg-[length:240px_460px] phone2:bg-[right_140px_top_150px] poco:bg-[left_0px_top_150px] poco:bg-[length:300px_600px] poco2:bg-[length:350px_700px] poco2:bg-[left_0px_top_150px] sm:bg-[left_0px_top_200px] sm:bg-[length:400px_800px] sm2:bg-[left_0px_top_180px] sm2:bg-[length:450px_900px]"
        >
          <div
            class="big2:bg-[length:550px_950px] 1xl:bg-[length:550px_900px] lg:bg-[length:370px_700px] 2xl:bg-[right_0px_top_100px] 2xl:bg-[length:500px_800px] xl:bg-[length:400px_750px] xl:bg-[right_0px_top_100px] semimd:bg-[right_0px_top_60px] semibig:bg-[length:500px_950px] semimd:bg-[length:350px_670px] md:bg-[right_0px_top_30px] md:bg-[length:300px_600px] h-full bg-no-repeat phone:bg-[left_90px_top_80px] phone:bg-[length:200px_400px] phone2:bg-[length:240px_460px] phone2:bg-[left_130px_top_80px] poco:bg-[length:300px_600px] poco:bg-[right_0px_top_50px] poco2:bg-[right_0px_top_50px] poco2:bg-[length:350px_700px] sm:bg-[right_0px_top_40px] sm:bg-[length:400px_800px] sm2:bg-[right_0px_top_40px] sm2:bg-[length:450px_900px] bg-cover bg-[url('./img/case_1.png')]"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>
