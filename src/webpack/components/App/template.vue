<template>
  <div id="app" class="App">
    <div class="App_header">
      <div class="App_headerLeft">
        <i class="material-icons">menu</i>
      </div>
      <div class="App_headerTitle">キャラクターなんとか機</div>
      <div class="App_headerRight"></div>
    </div>
    <div class="App_main">

      <div class="App_preview">
        <character-component :parts="parts" :color="color"></character-component>
      </div>

      <div class="App_editArea">
        <div class="App_areaContents">
          <div class="App_areaContent" v-for="target in partsMaster" v-if="showEdit === target">
            <ul class="App_partsOrColor">
              <li class="App_pocItem" :class="{'is-active': showEditType === 'parts'}" @click="changeEditType('parts')">着せ替え</li>
              <li class="App_pocItem" v-if="target !== 'face'" :class="{'is-active': showEditType === 'color'}" @click="changeEditType('color')">色変更</li>
            </ul>
            <div class="App_editWrapper">
              <edit-list-component v-if="showEditType === 'parts'" :target="target" :initial-parts="parts" :initial-color="color" @change-character="changeCharacter"></edit-list-component>
              <edit-color-component v-if="showEditType === 'color'" :target="target" :parts="parts" :color="color"></edit-color-component>
            </div>
          </div>
        </div>
        <div class="App_tabListWrapper">
          <ul class="App_tabList">
            <li v-for="target in partsMaster" class="App_tabItem" :class="{'is-active': showEdit === target}" @click="activateEdit(target)">
              <i class="App_tabIcon material-icons">{{targetIconMap[target]}}</i>
              <div class="App_tabTitle">{{targetTitleMap[target]}}</div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./script.js"></script>
