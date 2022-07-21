import "./registerServiceWorker";
import '@/assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "vue-toastification/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import Toast, { POSITION } from "vue-toastification";
import router from "./router";

const app = createApp(App)
app.use(router)
app.use(Toast, { position: POSITION.TOP_RIGHT })
app.mount('#app')