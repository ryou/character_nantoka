export default {
  data: function() {
    return {};
  },
  props: {
    navs: {
      type: Array,
      default: {
        icon: '',
        title: '',
        active: false,
      },
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
