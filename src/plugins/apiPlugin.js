import api from "@/services/api";

export default {
    install(Vue) {
        Vue.prototype.$api = api;
    }
}