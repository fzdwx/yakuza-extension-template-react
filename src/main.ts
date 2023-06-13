import '@fzdwx/launcher-api/dist/style.css'
import './assets/main.scss'

import {createApp} from 'vue'
// @ts-ignore
import App from './App.vue'

let app = createApp(App);
app.mount('#app')
