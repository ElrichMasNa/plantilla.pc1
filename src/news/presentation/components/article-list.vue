<script setup>
import {Article} from "../../domain/model/article.entity.js";
import ArticleItem from "./article-item.vue";

const props = defineProps({ articles: Array[Article], required: true });
const { articles } = props;
</script>

<template>
  <div v-for="article in articles">
    <article-item :article="article"/>
  </div>
</template>

<style scoped>

</style>