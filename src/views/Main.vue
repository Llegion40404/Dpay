<script setup>
import ClientsUse from "@/components/ClientsUse.vue";
import Email from "@/components/Email.vue";
import Features from "@/components/Features.vue";
import HowWork from "@/components/HowWork.vue";
import Wrapper from "@/components/Wrapper.vue";
const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <Wrapper :data="props.data" />
  <Features :data="props.data" />
  <HowWork :data="props.data" />
  <ClientsUse :data="props.data" />
  <Email :data="props.data" />
</template>

<style src="../style.css"></style>
