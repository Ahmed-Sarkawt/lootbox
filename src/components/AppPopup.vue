<template>
  <div class="background">
    <transition name="zoom">
      <div v-if="show" style="animation-duration: 200ms" class="content">
        <p class="title text-4xl font-bold py-4">{{ title }}</p>
        <p class="text-2xl">
          {{ result }}
        </p>
        <app-button class="my-4" @click="$store.commit('reset')">{{
          buttonText
        }}</app-button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppButton from "@/components/AppButton.vue";
import { AppState } from "@/store/appStore";
import Box from "@/models/box";
import { WinnableType } from "@/models/winnable";

@Component({
  name: "AppPopup",
  components: { AppButton },
})
export default class AppPopup extends Vue {
  show = false;

  get title(): string {
    switch (this.chosenBox?.winnable.type) {
      case WinnableType.item:
        return "Congratulations!!";
      case WinnableType.nothing:
        return "Uh oh... Not this Time!";
      case WinnableType.tryAgain:
        return "Cross Fingers and Try Again!";
      default:
        return "";
    }
  }

  get chosenBox(): Box | null {
    const { boxes, chosenBoxIndex } = this.$store.state as AppState;
    if (chosenBoxIndex !== null) {
      return boxes[chosenBoxIndex];
    }
    return null;
  }

  get result(): string {
    if (this.chosenBox?.winnable.type === WinnableType.item)
      return this.chosenBox.winnable.item!.name;
    return "";
  }

  get buttonText(): string {
    if (this.chosenBox?.winnable.type === WinnableType.tryAgain)
      return "Try Again";
    return "Go Back";
  }

  mounted() {
    this.show = true;
  }
}
</script>

<style scoped>
.title {
  color: #f9ab18;
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
