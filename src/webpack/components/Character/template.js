export default `
<div class="character">
  <div class="parts" :class="partsClass.hairBack" :style="colorStyle.hair"></div>
  <div class="parts" :class="partsClass.body"></div>
  <div class="parts" :class="partsClass.bodyColor" :style="colorStyle.body"></div>
  <div class="parts" :class="partsClass.head"></div>
  <div class="parts" :class="partsClass.face"></div>
  <div class="parts" :class="partsClass.eye"></div>
  <div class="parts" :class="partsClass.eyeColor" :style="colorStyle.eye"></div>
  <div class="parts" :class="partsClass.hairFront" :style="colorStyle.hair"></div>
</div>
`;
