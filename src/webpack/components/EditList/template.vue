<template>
  <div class="EditList">
    <div class="EditList_body">
      <ul class="EditList_samples">
        <li class="EditList_sample" v-for="character in characters" @click="selectCharacter(character)">
          <character-component :parts="character.parts" :color="character.color"></character-component>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>
