<template>
  <div class="BottomNavigation">
    <ul class="BottomNavigation_navs">
      <li v-for="nav in navs" class="BottomNavigation_nav" :class="{'-active': nav.active}" @click="clickNav(nav)">
        <i class="BottomNavigation_navIcon material-icons">{{ nav.icon }}</i>
        <div class="BottomNavigation_navTitle">{{ nav.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>
