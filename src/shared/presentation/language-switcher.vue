<script setup>

import {SelectButton as PvSelectButton} from "primevue";
</script>

<template>
<pv-select-button
    v-model="$i18n.locale"
    :options="$i18n.availableLocales"/>
</template>

<style scoped>

</style>