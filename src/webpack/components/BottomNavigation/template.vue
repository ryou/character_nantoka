<template>
  <div class="BottomNavigation">
    <ul class="BottomNavigation_navs">
      <li v-for="nav in navs" class="BottomNavigation_nav" :class="{'-active': nav.active}" @click="clickNav(nav)">
        <div
          v-if="nav.icon !== undefined && nav.icon !== ''"
          class="BottomNavigation_navIcon"
        >
          <icon-component>{{ nav.icon }}</icon-component>
        </div>
        <div
          v-if="nav.title !== undefined && nav.title !== ''"
          class="BottomNavigation_navTitle"
        >{{ nav.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>
