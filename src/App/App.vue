<template>
  <div>{{hello}}</div>
</template>

<script lang="ts">
import Component from 'vue-class-component';

@Component
export default class App {
  private readonly hello = 'hello Vue'
}
</script>

<style lang="scss">
html {
  body {
    background: #ffffff;
  }
}
</style>
