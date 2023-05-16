<script setup>
import { register } from "swiper/element/bundle";
register();

const slides = [
  {
    thumb:
      "https://dpay.uz/wp/wp-content/uploads/2022/02/01-app-showcase-screens.png",
    text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
    title: "Step 1.Advanced bydget managment",
  },
  {
    thumb:
      "https://dpay.uz/wp/wp-content/uploads/2022/02/02-app-showcase-screens.png",
    text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
    title: "Step 2.Latest transaction history",
  },
  {
    thumb:
      "https://dpay.uz/wp/wp-content/uploads/2022/02/03-app-showcase-screens.png",
    text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
    title: "Step 3.Transfers to people from your contact list",
  },
  {
    thumb:
      "https://dpay.uz/wp/wp-content/uploads/2022/02/04-app-showcase-screens.png",
    text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
    title: "Step 4.Card-tocard transfers",
  },
];
</script>
<template>
  <section class="text-white py-20 justify-center container relative">
    <h1 class="text-lg text-center mb-20 font-bold">How Does It Work?</h1>
    <img
      class="absolute top-[190px] left-[603px]"
      width="328"
      src="https://dpay.uz/wp/wp-content/plugins/silicon-elementor/assets/images/phone-frame.png"
      alt=""
    />
    <swiper-container
      init="false"
      class="w-2/3"
      navigation="true"
      slides-per-view="2"
      centeredSlides="true"
      loop="true"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.text"
        class="w-1/3 flex flex-col items-center"
        ><img :src="slide.thumb" alt="image" class="h-[663px] mb-10" />
        <h3 class="font-bold mb-5">{{ slide.title }}</h3>
        <p class="font-semibold opacity-70 w-3/5 text-center">
          {{ slide.text }}
        </p>
      </swiper-slide>
    </swiper-container>
  </section>
</template>
<style></style>
