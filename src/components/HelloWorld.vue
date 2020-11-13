<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ age }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true
  }
} as const

export default defineComponent({
  name: 'HelloWorld',
  props: PropsType
})
</script>
