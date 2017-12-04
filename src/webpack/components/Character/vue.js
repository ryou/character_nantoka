import template from './template.js';

export default {
  data: function() {
    return {};
  },
  template: template,
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
};
