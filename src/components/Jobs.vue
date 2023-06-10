<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <section class="dark:bg-[rgb(31,28,45)] py-20 mt-20">
    <div class="container px-3 md:px-5 dark:text-white">
      <h1
        class="phone:text-3xl sm:text-center poco2:text-4xl lg:text-5xl mb-5 poco2:mb-10"
      >
        {{ data.jobs.title }}
      </h1>
      <div class="md:flex items-center semibig:items-start justify-between">
        <div class="semibig:pt-10">
          <h2
            class="phone:text-lg poco2:text-xl lg:text-3xl md2:pr-5 md2:text-2xl md2:w-5/6"
          >
            {{ data.jobs.descr }}
          </h2>
          <ul class="my-5 text-lg list-disc px-5">
            <li
              class="my-1 sm:font-semibold sm:text-xl"
              v-for="job in data.jobs.jobs"
            >
              {{ job }}
            </li>
          </ul>
        </div>
        <div class="flex phone:flex-col md:w-10/12 poco2:mt-10 md2:w-7/12">
          <div
            class="bg-gray-600 font-semibold md2:text-xl bg-opacity-30 rounded-lg p-3 md:p-5"
          >
            <p class="mb-5 md2:mb-10">
              {{ data.jobs.inner.first }}
            </p>
            <p>
              {{ data.jobs.inner.second }}
            </p>
          </div>
          <div class="flex py-3">
            <a
              class="p-3 w-full text-center bg-indigo-900 rounded"
              href="mailto:info@dgb.uz"
              >{{ data.jobs.inner.email }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
