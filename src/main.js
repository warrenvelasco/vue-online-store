import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TheHeader from './components/layouts/TheHeader.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import AnimatedPlate from './components/ui/AnimatedPlate.vue'
import './assets/tailwind.css'

const app = createApp(App);

app.use(store);
app.use(router);

app.component('the-header', TheHeader);
app.component('base-card', BaseCard);
app.component('animated-plate', AnimatedPlate);
app.component('base-button', BaseButton);

app.mount('#app')
