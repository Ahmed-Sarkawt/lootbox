<template>
  <div>
    <div
      v-for="bar in bars"
      :key="bar.color"
      class="bar"
      :style="`background-color: ${bar.color}; width: ${
        bar.length
      }; margin-left: ${prolongs ? '0' : 'auto'}; border-${
        prolongs ? 'top-right' : 'top-left'
      }-radius: 4px; border-${
        prolongs ? 'bottom-right' : 'bottom-left'
      }-radius: 4px`"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "AppBars" })
export default class AppBars extends Vue {
  @Prop({ type: Boolean, default: false }) readonly prolongs!: boolean;

  bars: Bar[] = [
    { color: "#F9AB18", length: this.getLength(0) },
    { color: "#33A7DD", length: this.getLength(1) },
    { color: "#DA4626", length: this.getLength(2) },
  ];

  getLength(index: number) {
    if (this.prolongs) {
      return 30 + (index - 1) * 5 + "%";
    }
    return 30 - (index - 1) * 5 + "%";
  }
}

interface Bar {
  color: string;
  length: string;
}
</script>

<style scoped>
.bar {
  height: 65px;
  margin-bottom: 6px;
  display: block;
}
</style>
