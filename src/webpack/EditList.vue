<template>
  <div class="edit-list">
    <div class="body">
      <ul>
        <li v-for="character in characters" @click="selectCharacter(character)">
          <character-component :parts="character.parts" :color="character.color"></character-component>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import partsMaster from './data/parts.js';
import CharacterComponent from './Character.vue';

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
</script>

<style scoped>
.edit-list {
}
.body {
  padding: 30px;
  height: 100%;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
}
ul {
  list-style: none;
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
ul > li {
  cursor: pointer;
}
</style>
