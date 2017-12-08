export default {
  data: function() {
    return {};
  },
  props: {
    navs: {
      type: Array,
    },
  },
  methods: {
    clickNav: function(nav) {
      this.navs.forEach((nav) => {
        nav.active = false;
      });

      nav.active = true;
    }
  },
}
