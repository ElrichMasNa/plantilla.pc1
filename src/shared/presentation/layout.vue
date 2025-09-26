<script setup>
import {computed, onMounted, ref} from "vue";
import {newsstore} from "../../news/application/news-store.js";
import {Menubar as PvMenubar} from "primevue";
import SourceList from "../../news/presentation/components/source-list.vue";
import LanguageSwitcher from "./language-switcher.vue";
import ArticleList from "../../news/presentation/components/article-list.vue";
import UnavailableContent from "../../news/presentation/components/unavailable-content.vue";
import FooterContent from "./footer-content.vue";

const drawerVisible = ref(false);
const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
}

const sources = computed(() => newsstore.source);
const errors = computed(() => newsstore.errors);
let articles = computed(() => newsstore.article);
const rerenderKey = ref(0);
const setSource = source => {
  newsstore.setCurrentSource(source);
  articles = computed(() => newsstore.article);
  rerenderKey.value += 1;
  toggleDrawer();
};

onMounted(() => {
  newsstore.loadSources();
  rerenderKey.value += 1;
})
</script>

<template>
  <div>
    <div>
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" label="CatchUp" text @click="toggleDrawer"/>
          <source-list v-model:sources="sources" v-model:visible="drawerVisible" v-on:source-selected="setSource($event)"/>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    <article-list v-if="articles.length" :key="rerenderKey" v-model:articles="articles"/>
    <unavailable-content v-else :errors="errors" />
  </div>
  <footer-content/>
</template>

<style scoped>

</style>