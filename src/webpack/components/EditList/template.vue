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

<script src="./script.js"></script>
