<template>
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
</template>


<script>
export default {
  data: function() {
    return {};
  },
  props: [
    'parts',
    'color',
  ],
  computed: {
    partsClass: function() {
      return {
        hairBack: `icon-${this.parts.hairBack}_hair_back`,
        body: `icon-${this.parts.body}_body`,
        bodyColor: `icon-${this.parts.body}_body_color`,
        head: `icon-${this.parts.head}_head`,
        face: `icon-${this.parts.face}_face`,
        eye: `icon-${this.parts.eye}_eye`,
        eyeColor: `icon-${this.parts.eye}_eye_color`,
        hairFront: `icon-${this.parts.hairFront}_hair_front`,
      };
    },
    colorStyle: function() {
      return {
        hair: {
          filter: `hue-rotate(${this.color.hair.hue}deg) saturate(${this.color.hair.saturate}%) brightness(${this.color.hair.brightness}%)`,
        },
        eye: {
          filter: `hue-rotate(${this.color.eye.hue}deg) saturate(${this.color.eye.saturate}%) brightness(${this.color.eye.brightness}%)`,
        },
        body: {
          filter: `hue-rotate(${this.color.body.hue}deg) saturate(${this.color.body.saturate}%) brightness(${this.color.body.brightness}%)`,
        },
      };
    },
  },
}
</script>

<style scoped>
.character {
  position: relative;
  width: 150px;
  height: 200px;
}
.character .parts {
  position: absolute;
  top: 0; left: 0;
}
</style>
