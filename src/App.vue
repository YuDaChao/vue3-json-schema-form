<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="12" />
  <p>{{ count }}</p>
  <p>{{ num }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const count = ref(1)
    const num = ref(1000)
    // setInterval(() => {
    //   count.value += 1
    // }, 1000)
    // setInterval(() => {
    //   num.value += 1
    // }, 2000)
    for (let i = 1; i <= 5; i++) {
      count.value += i // watchEffect 只会执行一次
    }
    watchEffect(() => {
      console.log(count.value, num.value)
    })
    return {
      count,
      num
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
