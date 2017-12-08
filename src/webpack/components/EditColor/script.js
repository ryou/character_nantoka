export default {
  data: function() {
    return {};
  },
  props: {
    target: {
      type: String,
    },
    parts: {
      type: Object,
    },
    color: {
      type: Object,
    },
  },
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
