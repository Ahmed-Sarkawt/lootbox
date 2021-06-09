<template>
  <div id="app">
    <app-bars style="position: absolute; width: 100%; z-index: -1" />
    <div id="main">
      <!--   The Welcome Screen   -->
      <app-button
        v-if="scene === AppScene.welcome"
        @click="$store.commit('play')"
      >
        Play
      </app-button>

      <!--   The screen to make choices   -->
      <app-boxes v-else />

      <!--         The screen to make choices   -->
      <app-popup v-if="scene === AppScene.choiceMade" />
    </div>

    <app-bars
      prolongs
      style="position: absolute; width: 100%; bottom: 0; z-index: -1"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBars from "@/components/AppBars.vue";
import AppButton from "@/components/AppButton.vue";
import { AppScene, AppState } from "@/store/appStore";
import AppBoxes from "@/components/AppBoxes.vue";
import AppPopup from "@/components/AppPopup.vue";

@Component({
  name: "App",
  components: { AppPopup, AppBoxes, AppButton, AppBars },
})
export default class App extends Vue {
  state = this.$store.state as AppState;
  AppScene = AppScene;

  get scene(): AppScene {
    return this.state.scene;
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}

#main {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
