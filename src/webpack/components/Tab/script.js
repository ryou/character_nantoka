export default {
  data: function() {
    return {
      currentActive: 0,
    };
  },
  props: {
    tabs: {
      type: Array,
      default: [],
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    clickTab: function(index) {
      this.currentActive = index;
    },
  },
  mounted: function() {
    this.currentActive = this.active;
  },
};
