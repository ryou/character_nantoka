<template>
  <div class="editColor">
    <div class="formBox">
      <div class="boxTitle">色相</div>
      <div class="boxMain">
        <input type="range" v-model="color[colorTarget].hue" min="0" max="359">
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data: function() {
    return {};
  },
  props: [
    'target',
    'parts',
    'color',
  ],
  methods: {
  },
  computed: {
    colorTarget: function() {
      let target = this.target;
      if (target === 'hairFront' || target === 'hairBack') {
        target = 'hair';
      }

      return target;
    },
  },
}
</script>

<style scoped>
.editColor {
  text-align: center;
  padding: 20px;
}
.formBox {
  display: inline-block;
  text-align: left;
}
.boxTitle {

}
.boxMain {
}
</style>
