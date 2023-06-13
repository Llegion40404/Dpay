<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <section>
    <div class="container px-3 py-20">
      <div>
        <article>
          <h1
            class="text-2xl dark:text-white text-indigo-500 poco:text-3xl mb-10 font-semibold text-center poco2:text-left"
          >
            {{ data.service.title }}
          </h1>
          <div>
            <table class="text-left w-full border-collapse">
              <th class="border border-gray-500" colspan="2">
                <h2
                  class="text-center py-4 dark:text-white text-violet-500 text-lg poco2:text-xl sm2:text-2xl"
                >
                  {{ data.service.subtitle }}
                </h2>
              </th>
              <tr
                class="border border-gray-500 border-opacity-50"
                v-for="serv in data.service.services"
              >
                <th
                  class="border text-slate-500 border-gray-500 border-opacity-50 px-3 py-2"
                >
                  {{ serv.text }}
                </th>
                <th class="px-3 text-slate-500 py-2" v-for="pr in serv.price">
                  {{ pr }}
                </th>
              </tr>
            </table>
            <table class="text-left w-full sm:table flex flex-col">
              <th
                class="text-center border dark:text-white text-violet-500 border-gray-500 py-4 text-lg poco2:text-xl sm2:text-2xl"
                colspan="2"
              >
                {{ data.service.subtitle2 }}
              </th>
              <tr
                class="border text-slate-500 border-gray-500 border-opacity-50 sm:table-row flex flex-col"
                v-for="serv in data.service.smss"
              >
                <th
                  class="border-b border border-gray-500 border-opacity-50 px-3 py-2"
                >
                  {{ serv.text }}
                </th>
                <th class="px-3 py-2 sm:flex" v-for="pr in serv.price">
                  {{ pr }}
                </th>
              </tr>
            </table>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
