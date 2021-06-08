<template>
  <div class="window">
    <p class="title">Open a Chest to Win a Prize</p>
    <div class="boxes">
      <img
        v-for="(box, i) in $store.state.boxes"
        :key="i"
        :src="require('../assets/gift-box.svg')"
        class="box"
        width="30%"
        alt="gift box"
        @click="$store.commit('choose', i)"
      />
    </div>
  </div>
</template>

<style scoped>
.window {
  border-radius: 25px;
  box-shadow: 0 10px 12px #f9ab187a;
  background-color: white;
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

.title {
  text-align: center;
  font-weight: bold;
  font-size: 24pt;
  padding-block: 30px;
  padding-inline: 60px;
  margin-block: 0;
}
</style>
