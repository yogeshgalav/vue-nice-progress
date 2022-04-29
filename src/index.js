import VueNiceProgress from "./VueNiceProgress.js";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.use(VueNiceProgress);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueNiceProgress.install = install;

export default VueNiceProgress;