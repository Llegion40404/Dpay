<script setup>
import ServBtn from "@/components/ServBtn.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <section class="container px-3 pt-32 dark:text-white text-center">
    <div>
      <h1 class="text-2xl font-semibold">{{ data.additional.title }}</h1>
      <p class="mb-10 mt-3">{{ data.additional.subtitle }}</p>
      <p class="font-medium dark:text-slate-200">
        {{ data.additional.descr }}
      </p>
    </div>
    <main class="pt-20">
      <div>
        <article>
          <h2 class="text-2xl text-indigo-400">
            {{ data.additional.services.autoPay.title }}
          </h2>
          <p class="mt-2 mb-5">
            {{ data.additional.services.autoPay.descr }}
          </p>
          <p class="text-sm mb-5 dark:text-slate-300">
            {{ data.additional.services.autoPay.subtitle }}
          </p>
          <p v-for="t in data.additional.services.autoPay.types">{{ t }}</p>
          <div class="text-left py-10">
            <h2 class="text-xl mb-3">
              {{ data.additional.services.autoPay.first.title }}
            </h2>
            <p class="text-gray-300">
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
            <p class="py-3 text-gray-300">
              {{ data.additional.services.autoPay.first.activate.content }}
            </p>
          </div>
        </article>
        <article class="pb-10">
          <div>
            <h2 class="text-xl mb-3">
              {{ data.additional.services.autoPay.second.title }}
            </h2>
            <p class="text-gray-300">
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
            <p class="text-gray-400">
              {{ data.additional.services.autoPay.second.activate.content }}
            </p>
          </div>
          <ServBtn
            class="mt-10"
            :text="data.additional.services.detail.text"
            :icon="data.additional.services.detail.icon"
          />
        </article>
        <article class="pb-10 pt-20">
          <h2 class="text-2xl text-indigo-400">
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
                {{ idx + 1 }}.{{ t }}
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
        <article>
          <h2 class="text-2xl text-indigo-400 pt-20">
            {{ data.additional.services.myInvoice.title }}
          </h2>
          <p class="my-3">{{ data.additional.services.myInvoice.descr }}</p>
          <p>{{ data.additional.services.myInvoice.descr2 }}</p>
          <div class="text-left py-5">
            <h4 class="text-gray-300">
              {{ data.additional.services.myInvoice.typesTitle }}
            </h4>
            <ul class="my-5">
              <li v-for="(t, idx) in data.additional.services.myInvoice.types">
                {{ idx + 1 }}.{{ t }}
              </li>
            </ul>
          </div>
        </article>
        <article class="pb-5 pt-20">
          <h2 class="text-2xl text-indigo-400">
            {{ data.additional.services.transfer.title }}
          </h2>
          <p class="my-3 text-gray-300">
            {{ data.additional.services.transfer.descr }}
          </p>
          <p class="text-gray-300">
            {{ data.additional.services.transfer.descr2 }}
          </p>
          <ul class="text-left pt-10">
            <li
              class="mb-2"
              v-for="(t, idx) in data.additional.services.transfer.types"
            >
              {{ idx + 1 }}.{{ t }}
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
