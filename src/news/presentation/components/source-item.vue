<script setup>
const props = defineProps({source: {type : Source, required: true}});
const emit = defineEmits(['source-selected']);
function emitSourceSelectedEvent() {
  emit('source-selected',props.source);
}

</script>
<div class="m-4">
<div @click="emitSourceSelectedEvent" class = "flex align-content-start flex-wrap">
  <span class="flex align-items-center justify-content-center mr-2">
    <pv-avatar: aria-label="source.name"
                :image="source.urlToLogo"
                shape="circle"/>
  </span>
  <span class="flex align-items-center justify-content-center">
    {{source.name}}
  </span>
</div>

</div>
<template>

</template>

<style scoped>

</style>