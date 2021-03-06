import partsMaster from '../../data/parts.js';

export default {
  data: function() {
    return {
      bottomNavs: [
        {
          id: 'hairFront',
          icon: 'face',
          title: '前髪',
          active: true,
        },
        {
          id: 'hairBack',
          icon: 'face',
          title: '後髪',
          active: false,
        },
        {
          id: 'eye',
          icon: 'remove_red_eye',
          title: '目',
          active: false,
        },
        {
          id: 'body',
          icon: 'accessibility',
          title: '服',
          active: false,
        },
        {
          id: 'face',
          icon: 'mood',
          title: '表情',
          active: false,
        },
      ],
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
    showEdit: function() {
      const activeNav = this.bottomNavs.find((nav) => {
        return nav.active;
      });

      return activeNav.id;
    },
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
}
