<script setup>
const props = defineProps({
  text: { type: String, required: true },
  icon: { type: String, required: true },
});
</script>
<template>
  <button
    class="bg-indigo-600 text-white rounded-lg text-center p-4 font-medium my-5"
  >
    {{ text }}
    <i :class="icon"></i>
  </button>
</template>
