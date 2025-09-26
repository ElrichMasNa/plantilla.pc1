<script setup>
import {Source} from "../../domain/model/source.entity.js";
import SourceItem from "./source-item.vue";

const props = defineProps({visible: Boolean, sources:Array[Source]});
const emit = defineEmits(['source-selected']);

function emitSourceSelectedEvent(source){
  emit("source-selected", source);
}
</script>

<template>
<pv-drawer v-bind:visible="visible">
  <source-item v-for="source in source" :key="source.id" :source="source"
               @source-selected="emitSourceSelectedEvent(source)"/>

</pv-drawer>
</template>

<style scoped>

</style>