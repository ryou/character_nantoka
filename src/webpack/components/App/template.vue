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
          <bottom-navigation-component :navs="bottomNavs"></bottom-navigation-component>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="../../assets/scss/style.scss"></style>
