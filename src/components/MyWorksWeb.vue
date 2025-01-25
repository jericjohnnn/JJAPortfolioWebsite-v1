<template>
  <div>
    <VueFlicking :options="{ circular: true }" :plugins="plugins">
      <div class="card-panel is-small"><span class="flicking-index">1</span></div>
      <div class="card-panel is-small"><span class="flicking-index">2</span></div>
      <div class="card-panel is-small"><span class="flicking-index">3</span></div>
      <div class="card-panel is-small"><span class="flicking-index">4</span></div>
      <div class="card-panel is-small"><span class="flicking-index">5</span></div>
      <div class="card-panel is-small"><span class="flicking-index">6</span></div>
    </VueFlicking>
  </div>
</template>
<script setup>
import { Perspective } from "@egjs/flicking-plugins";

const plugins = [new Perspective({ rotate: 0.5 })];
</script>

<style>
.card-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: darkseagreen;
  justify-content: flex-end;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10.2, 10.2, 10.2, 0.1);
  max-width: 100%;
  font-size: 3rem;
  margin: 0.5rem;
  width: 50%;
  height: 200px;
  padding: 30px 20px;
  box-sizing: border-box;
  overflow: hidden;
}

.is-small {
  width: 33%;
}

.flicking-index {
  position: relative;
  min-width: 60px;
  text-align: center;
}

.flicking-index::after {
  position: absolute;
  content: "PANEL";
  font-weight: bold;
  left: 0;
  bottom: -1.2rem;
  width: 100%;
  text-align: center;
  font-size: 1rem;
}
</style>
