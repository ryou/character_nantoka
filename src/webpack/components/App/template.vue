<template>
  <div id="app" class="App">
    <div class="App_header">
      <div class="App_headerLeft">
        <icon-component>menu</icon-component>
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
          <div class="App_areaContent" v-for="(target, key) in partsMaster" v-if="showEdit === target" :key="key">
            <tab-component
              :tabs="[
                'tab01',
                'tab02',
              ]"
            >
              <template scope="props">
                <div v-if="props.active === 0">
                  <edit-list-component :target="target" :initial-parts="parts" :initial-color="color" @change-character="changeCharacter"></edit-list-component>
                </div>
                <div v-if="props.active === 1">
                  <edit-color-component :target="target" :parts="parts" :color="color"></edit-color-component>
                </div>
              </template>
            </tab-component>
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
