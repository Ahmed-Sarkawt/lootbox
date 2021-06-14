<template>
  <div class="background">
    <transition name="zoom">
      <div v-if="show" style="animation-duration: 200ms" class="content">
        <p class="title">Congratulations!!</p>
        <p class="prize">
          {{ $store.state.boxes[$store.state.chosenBoxIndex].item.name }}
        </p>
        <app-button @click="$store.commit('reset')">Play Again</app-button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppButton from "@/components/AppButton.vue";

@Component({
  name: "AppPopup",
  components: { AppButton },
})
export default class AppPopup extends Vue {
  show = false;

  mounted() {
    this.show = true;
  }
}
</script>

<style scoped>
.title {
  font-size: 24pt;
  color: #f9ab18;
  font-weight: bold;
  margin: 24px 0;
}

.prize {
  font-size: 18pt;
  font-weight: bold;
}

.content {
  padding-block: 20px;
  padding-inline: 40px;
  background-color: white;
  margin: auto;
  border-radius: 24px;
  text-align: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #00000021;
  display: flex;
  flex-direction: column;
}
</style>
