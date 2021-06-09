<template>
  <div class="window">
    <p class="title">Open a Chest to Win a Prize</p>
    <transition-group tag="div" name="box" class="boxes">
      <img
        v-for="(box, i) in $store.state.boxes"
        :key="box.id"
        :src="require('../assets/gift-box.svg')"
        class="box"
        width="30%"
        alt="gift box"
        @click="$store.commit('choose', i)"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "AppBoxes" })
export default class AppBoxes extends Vue {
  mounted() {
    setTimeout(() => this.$store.commit("shuffle"), 200);
  }
}
</script>

<style scoped>
.window {
  border-radius: 25px;
  box-shadow: 0 10px 12px #f9ab187a;
  background-color: white;
  width: 600px;
}

.boxes {
  padding-block: 30px;
  padding-inline: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.box {
  margin-block: 10px;
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
</style>
