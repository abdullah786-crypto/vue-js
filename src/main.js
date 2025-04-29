
import { createApp } from 'vue'
import templeteSyntax from './templeteSyntax.vue'
import { createPinia } from 'pinia'

const pinia = createPinia();
const app = createApp(templeteSyntax);

app.use(pinia);
app.mount('#app');

// const app = createApp(templeteSyntax).mount('#app')
