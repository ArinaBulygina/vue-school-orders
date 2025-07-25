import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import store from './store/store';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
.use(vuetify)
.use(router)
.use(store)
.mount('#app')
