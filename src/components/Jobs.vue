<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <section class="container px-2 dark:text-white my-10">
    <div>
      <h1 class="phone:text-3xl poco2:text-4xl mb-5 poco2:mb-10">
        {{ data.jobs.title }}
      </h1>
      <div>
        <div>
          <h2 class="phone:text-lg poco2:text-xl">{{ data.jobs.descr }}</h2>
          <ul class="my-5 text-lg list-disc px-5">
            <li class="my-1" v-for="job in data.jobs.jobs">{{ job }}</li>
          </ul>
        </div>
        <div
          class="flex phone:flex-col bg-slate-600 rounded-lg p-3 poco2:mt-10"
        >
          <p class="mb-5 font-semibold">
            {{ data.jobs.inner.first }}
          </p>
          <p class="font-semibold">
            {{ data.jobs.inner.second }}
          </p>
          <div class="flex justify-center py-3">
            <a class="p-3 bg-indigo-900 rounded" href="mailto:info@dgb.uz">{{
              data.jobs.inner.email
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
