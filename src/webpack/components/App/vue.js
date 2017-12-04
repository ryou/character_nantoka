import template from './template.js';

import CharacterComponent from '../Character/vue.js';
import EditListComponent from '../EditList/vue.js';
import EditColorComponent from '../EditColor/vue.js';
import partsMaster from '../../data/parts.js';

export default {
  data: function() {
    return {
      targetIconMap: {
        hairFront: 'face',
        hairBack: 'face',
        eye: 'remove_red_eye',
        body: 'accessibility',
        face: 'mood',
      },
      targetTitleMap: {
        hairFront: '前髪',
        hairBack: '後髪',
        eye: '目',
        body: '服',
        face: '表情',
      },
      showEdit: 'hairFront',
      showEditType: 'parts',
      partsMaster: [
        'hairFront',
        'hairBack',
        'eye',
        'body',
        'face',
      ],
      parts: {
        hairBack: 10,
        body: 10,
        head: 1,
        face: 1,
        eye: 2,
        hairFront: 1,
      },
      color: {
        hair: {
          hue: 130,
          saturate: 100,
          brightness: 100,
        },
        eye: {
          hue: 0,
          saturate: 100,
          brightness: 100,
        },
        body: {
          hue: 0,
          saturate: 100,
          brightness: 100,
        },
      }
    };
  },
  template: template,
  methods: {
    changeCharacter: function(character) {
      this.parts = character.parts;
      this.color = character.color;
    },
    activateEdit: function(target) {
      this.showEdit = target;
      this.showEditType = 'parts';
    },
    changeEditType: function(type) {
      this.showEditType = type;
    },
  },
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
          filter: `hue-rotate(${this.color.hair.hue}deg)`,
        },
        eye: {
          filter: `hue-rotate(${this.color.eye.hue}deg)`,
        },
        body: {
          filter: `hue-rotate(${this.color.body.hue}deg)`,
        },
      };
    },
  },
  components: {
    'character-component': CharacterComponent,
    'edit-list-component': EditListComponent,
    'edit-color-component': EditColorComponent,
  },
};
