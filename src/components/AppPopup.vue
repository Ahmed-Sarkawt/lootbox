<template>
  <div class="background">
    <div class="content">
      <p class="title">Congratulations!!</p>
      <app-button @click="$store.commit('reset')">Play Again</app-button>
    </div>
  </div>
</template>

<script lang="ts">
import AppButton from "@/components/AppButton";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "AppPopup",
  components: { AppButton },
})
export default class AppPopup extends Vue {}
</script>

<style scoped>
.title {
  margin: 24px 0px;
}

.content {
  padding-block: 20px;
  padding-inline: 40px;
  background-color: white;
  margin: auto;
  border-radius: 24px;
  font-size: 24pt;
  color: #f9ab18;
  font-weight: bold;
  text-align: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.34);
  display: flex;
  flex-direction: column;
}
</style>
