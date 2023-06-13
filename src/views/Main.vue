<script setup>
import ClientsUse from "@/components/ClientsUse.vue";
import Email from "@/components/Email.vue";
import Features from "@/components/Features.vue";
import HowWork from "@/components/HowWork.vue";
import Wrapper from "@/components/Wrapper.vue";
import { resource } from "@/components/resources";
const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <Wrapper :data="props.lang == 'ru' ? resource.ru : resource.uz" />
  <Features :data="props.lang == 'ru' ? resource.ru : resource.uz" />
  <HowWork :data="props.lang == 'ru' ? resource.ru : resource.uz" />
  <ClientsUse :data="props.lang == 'ru' ? resource.ru : resource.uz" />
  <Email :data="props.lang == 'ru' ? resource.ru : resource.uz" />
</template>

<style src="../style.css"></style>
