export default `
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
      <div class="tab-list-wrapper">
        <ul class="tab-list">
          <li v-for="target in partsMaster" :class="{'is-active': showEdit === target}" @click="activateEdit(target)">
            <i class="icon material-icons">{{targetIconMap[target]}}</i>
            <div class="title">{{targetTitleMap[target]}}</div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</div>
`;
