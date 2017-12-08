<template>
  <div class="EditColor">
    <div class="EditColor_item">
      <div class="EditColor_itemInner">
        <div class="EditColor_itemTitle">色相</div>
        <div class="EditColor_itemMain">
          <input type="range" v-model="color[colorTarget].hue" min="0" max="359">
        </div>
      </div>
    </div>
    <div class="EditColor_item">
      <div class="EditColor_itemInner">
        <div class="EditColor_itemTitle">彩度</div>
        <div class="EditColor_itemMain">
          <input type="range" v-model="color[colorTarget].saturate" min="0" max="200">
        </div>
      </div>
    </div>
    <div class="EditColor_item">
      <div class="EditColor_itemInner">
        <div class="EditColor_itemTitle">明るさ</div>
        <div class="EditColor_itemMain">
          <input type="range" v-model="color[colorTarget].brightness" min="50" max="150">
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
