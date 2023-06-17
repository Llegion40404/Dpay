<script setup>
import ServBtn from "@/components/ServBtn.vue";
import router from "@/router";
import { onMounted } from "vue";
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
const auto = ref(null);
const place = ref(null);
const invoice = ref(null);
const card = ref(null);
onMounted(() => {
  let id = router.currentRoute.value.fullPath.slice(10);
  if (id.length > 1)
    eval(`${id}.value.scrollIntoView({ behavior: "smooth",block:'center' });`);
});
</script>
<template>
  <section class="container px-3 pt-32 dark:text-white text-center">
    <div>
      <h1 class="text-2xl sm2:text-3xl font-semibold">
        {{ data.additional.title }}
      </h1>
      <p class="mb-10 mt-3 sm2:text-lg">{{ data.additional.subtitle }}</p>
      <p class="font-medium dark:text-slate-200 sm2:text-lg">
        {{ data.additional.descr }}
      </p>
    </div>
    <main class="pt-20 semibig:text-left">
      <div>
        <article ref="auto" id="auto" class="sm2:text-lg semibig:text-xl">
          <h2 class="text-2xl text-indigo-400 sm2:text-3xl">
            {{ data.additional.services.autoPay.title }}
          </h2>
          <p class="mt-2 mb-5 sm2:text-lg sm2:mb-1">
            {{ data.additional.services.autoPay.descr }}
          </p>
          <p class="text-sm sm2:text-lg mb-5 dark:text-slate-300">
            {{ data.additional.services.autoPay.subtitle }}
          </p>
          <ul class="list-disc px-5">
            <li
              class="text-left sm2:text-lg"
              v-for="t in data.additional.services.autoPay.types"
            >
              {{ t }}
            </li>
          </ul>
          <div class="text-left sm2:text-lg py-10">
            <h2 class="text-xl sm2:text-2xl mb-3 text-indigo-400">
              {{ data.additional.services.autoPay.first.title }}
            </h2>
            <p class="dark:text-gray-300 text-black">
              {{ data.additional.services.autoPay.first.text }}
            </p>
            <ul class="list-disc px-5 py-5">
              <li v-for="t in data.additional.services.autoPay.first.types">
                {{ t }}
              </li>
            </ul>
            <h3 class="text-indigo-400">
              {{ data.additional.services.autoPay.first.activate.title }}
            </h3>
            <p class="py-3 dark:text-gray-300 text-black">
              {{ data.additional.services.autoPay.first.activate.content }}
            </p>
          </div>
        </article>
        <article class="pb-10 sm2:text-lg">
          <div class="text-left">
            <h2 class="text-xl sm2:text-2xl text-indigo-400 mb-3">
              {{ data.additional.services.autoPay.second.title }}
            </h2>
            <p class="dark:text-gray-300 text-black">
              {{ data.additional.services.autoPay.second.descr }}
            </p>
            <p class="my-3 text-indigo-400">
              {{ data.additional.services.autoPay.second.activate.title }}
            </p>
            <ul class="list-disk">
              <li
                class="my-3"
                v-for="(t, idx) in data.additional.services.autoPay.second
                  .activate.types"
              >
                {{ idx + 1 }}. {{ t }}
              </li>
            </ul>
            <p class="dark:text-gray-400 text-black">
              {{ data.additional.services.autoPay.second.activate.content }}
            </p>
          </div>
          <ServBtn
            :text="data.additional.services.detail.text"
            :icon="data.additional.services.detail.icon"
          />
        </article>
        <article ref="place" id="place" class="pb-10 pt-20 sm2:text-lg">
          <h2 class="text-xl sm2:text-3xl text-indigo-400">
            {{ data.additional.services.eventPay.title }}
          </h2>
          <p>{{ data.additional.services.eventPay.subtitle }}</p>
          <p class="my-4">{{ data.additional.services.eventPay.descr }}</p>
          <p class="my-4">{{ data.additional.services.eventPay.descr2 }}</p>
          <div class="text-left">
            <h3 class="text-indigo-400">
              {{ data.additional.services.eventPay.activate.title }}
            </h3>
            <ul class="my-5">
              <li
                class="my-3"
                v-for="(t, idx) in data.additional.services.eventPay.activate
                  .types"
              >
                {{ idx + 1 }}. {{ t }}
              </li>
            </ul>
            <p class="text-red-700 font-medium">
              {{ data.additional.services.eventPay.activate.warn }}
            </p>
          </div>
          <ServBtn
            :text="data.additional.services.detail.text"
            :icon="data.additional.services.detail.icon"
          />
        </article>
        <article ref="invoice" id="invoice" class="sm2:text-lg pb-20">
          <h2 class="text-2xl sm2:text-3xl text-indigo-400 pt-20">
            {{ data.additional.services.myInvoice.title }}
          </h2>
          <p class="my-3">{{ data.additional.services.myInvoice.descr }}</p>
          <p>{{ data.additional.services.myInvoice.descr2 }}</p>
          <div class="text-left py-5">
            <h4 class="dark:text-gray-300 text-black">
              {{ data.additional.services.myInvoice.typesTitle }}
            </h4>
            <ul>
              <li v-for="(t, idx) in data.additional.services.myInvoice.types">
                {{ idx + 1 }}. {{ t }}
              </li>
            </ul>
          </div>
          <ServBtn
            :text="data.additional.services.detail.text"
            :icon="data.additional.services.detail.icon"
          />
        </article>
        <article ref="card" id="card" class="py-20 sm2:text-lg">
          <h2 class="text-2xl sm2:text-3xl text-indigo-400 sm2:tetxt-3xl">
            {{ data.additional.services.transfer.title }}
          </h2>
          <p class="my-3 dark:text-gray-300 text-black">
            {{ data.additional.services.transfer.descr }}
          </p>
          <p class="dark:text-gray-300 text-black">
            {{ data.additional.services.transfer.descr2 }}
          </p>
          <ul class="text-left pt-10">
            <li
              class="mb-2"
              v-for="(t, idx) in data.additional.services.transfer.types"
            >
              {{ idx + 1 }}. {{ t }}
            </li>
          </ul>
          <ServBtn
            :text="data.additional.services.detail.text"
            :icon="data.additional.services.detail.icon"
          />
        </article>
      </div>
    </main>
  </section>
</template>
