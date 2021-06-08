<template>
  <div id="app">
    <button v-for="(box, i) in boxes" id="box" @click="reveal(box)" :key="i">
      {{ isRevealed ? box.item.name : box.item.name }}
    </button>

    <p>Won Items</p>
    <ul>
      <li v-for="(message, i) in messages" :key="i">{{ message }}</li>
    </ul>

    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "@/models/game";
import { items } from "@/data/items";
import Box from "@/models/box";

@Component({ name: "App" })
export default class App extends Vue {
  boxes = new Game(items).run(9);
  messages: string[] = [];
  isRevealed = false;

  reveal(box: Box) {
    this.isRevealed = true;
    this.messages.push(box.item.name);
  }

  reset() {
    this.isRevealed = false;
    this.boxes = new Game(items).run(9);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#box {
  padding: 50px;
  display: inline-block;
  background-color: lightcoral;
  margin: 20px;
}
</style>
