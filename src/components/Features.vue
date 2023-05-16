<script setup>
const logos = [
  "https://dpay.uz/wp/wp-content/uploads/2022/02/01-brands.svg",
  "https://dpay.uz/wp/wp-content/uploads/2022/02/02-brands.svg",
  "https://dpay.uz/wp/wp-content/uploads/2022/02/03-brands.svg",
  "https://dpay.uz/wp/wp-content/uploads/2022/02/04-brands.svg",
  "https://dpay.uz/wp/wp-content/uploads/2022/02/05-brands.svg",
  "https://dpay.uz/wp/wp-content/uploads/2022/02/06-brands.svg",
];
const features = [
  {
    thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/payments.svg",
    title: "Easy Payments",
    text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
  },
  {
    thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/security.svg",
    title: "Data Security",
    text: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.",
  },
  {
    thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/statistics.svg",
    title: "Cost Statistics",
    text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.",
  },
  {
    thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/support.svg",
    title: "Support 24/7",
    text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.",
  },
  {
    thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/cashback.svg",
    title: "Regular Cashback",
    text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.",
  },
  {
    thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/happy.svg",
    title: "Top Standards",
    text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.",
  },
];
</script>
<template>
  <section class="container py-24">
    <ul class="flex justify-between">
      <li
        class="px-3 py-7 border-opacity-20 border-white border-[1px] rounded-lg"
        v-for="logo in logos"
      >
        <img width="190" :src="logo" alt="logoipsum" />
      </li>
    </ul>
    <article class="pt-32 flex justify-around">
      <div class="w-7/12">
        <img src="../img/phone-features.png" alt="phone image" />
      </div>
      <article class="text-white w-3/5">
        <h4 class="font-bold mb-8">App Features</h4>
        <p class="opacity-80 font-semibold text-lg mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
          volutpat ligula est. Mattis fermentum, at nec lacus.
        </p>
        <div class="flex flex-wrap justify-between">
          <div
            v-for="f in features"
            class="w-5/12 mb-12 flex items-start gap-6 justify-between"
          >
            <img
              class="bg-[rgb(31,28,45)] p-4 box-border rounded-lg"
              :src="f.thumb"
              alt="icon"
            />
            <div>
              <h2 class="font-semibold text-2xl mb-4">{{ f.title }}</h2>
              <p class="text-indigo-200 opacity-40 font-light text-lg">
                {{ f.text }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </article>
  </section>
</template>
