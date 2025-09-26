import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./i18n.js";
import PrimeVue from 'primevue/config';
import material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {button} from "@primeuix/themes/aura/inputnumber";
import {Avatar, Button, Drawer, Menubar, SelectButton, Toolbar, Tooltip} from "primevue";
createApp(App)
    .use(i18n)
    .use(PrimeVue, {ripple: true, theme: {preset: Material}})
    .component('pv-button', button)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component('pv-drawer',  Drawer)
    .component('pv-image', Image)
    .component('pv-toolbar', Toolbar)
    .component('pv-menubar', Menubar)
    .directive('tooltip', Tooltip)
    .mount('#app')
