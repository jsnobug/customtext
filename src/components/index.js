import Vue from 'vue'
let componentsFiles = require.context('.', false, /custom-.*\.vue$/)
console.log(componentsFiles.keys())
componentsFiles.keys().forEach(item => {
  let componentEntity = componentsFiles(item).default
  Vue.component(componentEntity.name, componentEntity)
})
