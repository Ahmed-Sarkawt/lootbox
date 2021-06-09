<template>
  <button v-bind="$attrs" v-on="$listeners">
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "AppButton" })
export default class AppButton extends Vue {}
</script>

<style scoped>
button {
  padding-block: 10px;
  padding-inline: 60px;
  background-color: #f9ab18;
  color: white;
  font-size: 45pt;
  font-family: Jumpman;
  border-radius: 4px;
  border: none;
  opacity: 0.9;
  display: inline-block;
  text-transform: uppercase;
  text-orientation: revert;
}

button:hover {
  opacity: 0.8;
  cursor: pointer;
}

button:active {
  opacity: 1;
  border: none;
}

button:focus {
  border: none;
}
</style>
