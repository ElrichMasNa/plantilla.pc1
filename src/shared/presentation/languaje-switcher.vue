<script setup>

import {SelectButton as PvSelectButton} from "primevue";
</script>

<template>
<pv-select-button
    v-model = "$i18n.locale" :options = "$i18n.availablelocales.map(locals => ({label: locale, toUpperCase: locals.toUpperCase(), value: locale}))"/>

</template>

<style scoped>

</style>