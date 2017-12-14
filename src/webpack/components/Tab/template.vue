<template>
  <div class="Tab">
    <ul class="Tab_bar">
      <div v-for="(tab, index) in tabs" class="Tab_btn" :class="{ 'is-active': index === currentActive }" @click="clickTab(index)">
        {{ tab }}
      </div>
    </ul>
    <div class="Tab_contents">
      <slot :active="currentActive"></slot>
    </div>
  </div>
</template>

<script src="./script.js"></script>
