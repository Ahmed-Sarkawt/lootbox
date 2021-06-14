<template>
  <div class="window sm:w-96 bg-white sm:h-auto w-full h-full sm:rounded-3xl">
    <p class="title">Open a Chest to Win a Prize</p>
    <transition-group
      tag="div"
      name="box"
      class="flex flex-wrap justify-around pb-6"
    >
      <span
        v-for="(box, i) in $store.state.boxes"
        :key="box.id"
        class="text-center"
        style="height: 120px"
      >
        <img
          style="box-shadow: 6px 6px 12px #bcaa8617"
          class="rounded-2xl inline-block p-4 mx-4"
          :class="{ tilt: chosenBoxIndex === i }"
          width="80px"
          height=""
          :src="!hasClosed || chosenBoxIndex === i ? openIcon : closedIcon"
          alt="gift box"
          @click="choose(i)"
        />
      </span>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "AppBoxes" })
export default class AppBoxes extends Vue {
  openIcon = require("../assets/arabella-open.svg");
  closedIcon = require("../assets/arabella-closed.svg");
  hasClosed = false;
  chosenBoxIndex: null | number = null;

  choose(i: number) {
    this.chosenBoxIndex = i;
    setTimeout(() => this.$store.commit("choose", i), 1000);
  }

  mounted() {
    // change the icon after half a second
    setTimeout(() => (this.hasClosed = true), 200);

    // shuffle after changing the icon
    setTimeout(() => this.$store.commit("shuffle"), 500);
  }
}
</script>

<style scoped>
.window {
  box-shadow: 0 12px 12px #f9ab187a;
}

.box-move {
  transition: transform 0.5s;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 24pt;
  padding-block: 30px;
  padding-inline: 60px;
  margin-block: 0;
}

.tilt {
  animation: tilt-animation 1s ease-in-out;
  transform-origin: center;
}

@keyframes tilt-animation {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(45deg);
  }

  75% {
    transform: rotate(-45deg);
  }
}
</style>
