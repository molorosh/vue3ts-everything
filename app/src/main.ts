import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { TodoStatePlugin } from "@/plugins/TodoStatePlugin";
import { BeInspiredPlugin } from "@/plugins/BeInspiredPlugin";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// keep newlines when passed into components
// I actually do this in vite.config.ts now
// app.config.compilerOptions.whitespace = 'preserve'

app.use(createPinia())
app.use(router)

app.use(TodoStatePlugin /* can pass options as second param */);
app.use(BeInspiredPlugin);

app.mount('#app')
