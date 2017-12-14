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
      partsMaster: [
        'hairFront',
        'hairBack',
        'eye',
        'body',
        'face',
      ],
      tabs: {
        hairFront: [
          '着せ替え',
          '色指定',
        ],
        hairBack: [
          '着せ替え',
          '色指定',
        ],
        eye: [
          '着せ替え',
          '色指定',
        ],
        body: [
          '着せ替え',
          '色指定',
        ],
        face: [
          '着せ替え',
        ],
      },
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
    },
  },
  computed: {
    showEdit: function() {
      const activeNav = this.bottomNavs.find((nav) => {
        return nav.active;
      });

      return activeNav.id;
    },
  },
}
