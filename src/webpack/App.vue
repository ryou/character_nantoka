<template>
  <div id="app">
    <div class="header">
      <div class="leftBtn">
        <i class="material-icons">menu</i>
      </div>
      <div class="title">キャラクターなんとか機</div>
      <div class="rightBtn"></div>
    </div>
    <div class="main">

      <character-component :parts="parts" :color="color"></character-component>

      <div class="edit-area">
        <div class="area-contents">
          <div class="area-content" v-for="target in partsMaster" v-if="showEdit === target">
            <ul class="parts-or-color">
              <li :class="{'is-active': showEditType === 'parts'}" @click="changeEditType('parts')">着せ替え</li>
              <li v-if="target !== 'face'" :class="{'is-active': showEditType === 'color'}" @click="changeEditType('color')">色変更</li>
            </ul>
            <div class="edit-wrapper">
              <edit-list-component v-if="showEditType === 'parts'" :target="target" :initial-parts="parts" :initial-color="color" @change-character="changeCharacter"></edit-list-component>
              <edit-color-component v-if="showEditType === 'color'" :target="target" :parts="parts" :color="color"></edit-color-component>
            </div>
          </div>
        </div>
        <ul class="tab-list">
          <li v-for="target in partsMaster" :class="{'is-active': showEdit === target}" @click="activateEdit(target)">
            <i class="icon material-icons">{{targetIconMap[target]}}</i>
            <div class="title">{{targetTitleMap[target]}}</div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>


<script>
import CharacterComponent from './Character.vue';
import EditListComponent from './EditList.vue';
import EditColorComponent from './EditColor.vue';
import partsMaster from './data/parts.js';

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
        },
        eye: {
          hue: 0,
        },
        body: {
          hue: 0,
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
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    font-family: "Noto Sans JP", sans-serif;
    color: #2c3e50;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  .material-icons {
    vertical-align: middle;
  }
  .l-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
  }
</style>

<style scoped>
#app {
  position: relative;
  height: 100%;
}

.header {
  background: #2c3e50;
  color: #fff;
  box-shadow: rgba(0, 0, 0, .2) 0 0 10px;

  display: table;
  width: 100%;

  position: absolute;
  top: 0; left: 0;
}
.header .leftBtn,
.header .rightBtn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;

  width: 50px; height: 50px;
}
.header .title {
  display: table-cell;
  vertical-align: middle;
}

.main {
  padding-top: 50px;
  height: 100%;
  box-sizing: border-box;
}

.character {
  position: relative;
  width: 150px;
  height: 200px;

  margin: 0 auto;
}
.character .parts {
  position: absolute;
  top: 0; left: 0;
}

.edit-area {
  height: calc(100% - 200px);
}

.area-contents {
  height: calc(100% - 60px);
}

.area-content {
  height: 100%;
}

.parts-or-color {
  display: flex;
  justify-content: center;

  list-style: none;

  height: 50px;
  box-shadow: rgba(0, 0, 0, .15) 0 5px 10px;

  position: relative;
  z-index: 10;

  background: #2c3e50;
  color: #fff;
}
.parts-or-color > li {
  height: 100%;
  padding: 10px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}
.parts-or-color > li.is-active {
  border-bottom-color: #fff;
}

.edit-wrapper {
  height: calc(100% - 50px);

  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.tab-list {
  flex-shrink: 0;
  flex-grow: 0;

  display: table;
  table-layout: fixed;
  width: 100%;
}
.tab-list > li {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 60px;

  background: #ecf0f1;

  cursor: pointer;
}
.tab-list > li:not(:last-child) {
  border-right: 1px solid #ddd;
}
.tab-list > li.is-active {
  background: #34495e;
  color: #fff;
}
.tab-list > li .title {
  font-size: 12px;
}
</style>
