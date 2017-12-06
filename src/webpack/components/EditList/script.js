import partsMaster from '../../data/parts.js';
import CharacterComponent from '../Character/template.vue';

export default {
  data: function() {
    return {
      parts: {},
      color: {},
    };
  },
  props: [
    'target',
    'initialParts',
    'initialColor',
  ],
  methods: {
    selectCharacter: function(character) {
      this.$emit('change-character', character)
    },
  },
  computed: {
    characters: function() {
      const partsList = partsMaster[this.target];

      const characters = [];

      // 参照を切るためにassignする
      // https://qiita.com/berlysia/items/e76cde19cd61bd151b83
      Object.assign(this.parts, this.initialParts);
      Object.assign(this.color, this.initialColor);

      partsList.forEach((parts) => {
        const tmp = {};
        Object.assign(tmp, this.parts);
        tmp[this.target] = parts.id;
        const tmp2 = {
          parts: tmp,
          color: this.color,
        };

        characters.push(tmp2);
      });

      return characters;
    },
  },
  components: {
    'character-component': CharacterComponent,
  },
}
